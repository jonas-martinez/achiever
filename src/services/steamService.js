'use strict'

import axios from "axios";
import gameService from '../services/gameService.js';
import userGameService from "./userGameService.js";
import { Game } from "../classes/Game.js";
import { UserGame } from "../classes/UserGame.js";
import { GameAchievement } from "../classes/GameAchievement.js";
import { User } from "../classes/User.js";

const steamAPIKey = "CA8F42C8DC798264FCF69D088BB2E918";
const steamAPIBaseUrl = "https://api.steampowered.com";

export default {
    getUserSteamIDFromVanity(vanityUrl) {
        return axios.get(`${steamAPIBaseUrl}/ISteamUser/ResolveVanityURL/v0001/?key=${steamAPIKey}&vanityurl=${vanityUrl}`).then((value) => value.data.response).catch((error) => console.log(error));
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     */
    async getUserGames(api, userId, steamId) {
        // TODO: Don't create Game if appid already in DB but update it.
        let games = await axios.get(`${steamAPIBaseUrl}/IPlayerService/GetOwnedGames/v1/?key=${steamAPIKey}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`).then((value) => value.data.response).catch((error) => console.log(error));

        let count = 0;
        for (let game of games.games) {
            if (game !== undefined) {
                // Add achievements to game
                let achievements = (await this.getSchemaForGame(game.appid)).game?.availableGameStats?.achievements;

                // Add game in db
                await gameService.new(api, new Game(game.appid, game.img_icon_url, game.name));

                if (achievements != undefined && achievements.length > 0) {
                    await api.data.coll(GameAchievement).insertMany(achievements?.map((achievement) => new GameAchievement(game.appid, achievement.name, achievement.display_name, achievement.description, achievement.icon)));
                }

                // Add user game achievements and playtime in db
                let unlockedAchievements = await this.getUserGameAchievements(steamId, game.appid);

                await userGameService.new(api, new UserGame(game.appid, unlockedAchievements, userId, game.playtime_forever));
            }
            count++;

            if (count >= 1) {
                break;
            }
        }

        await api.data.coll(User).updateDoc({ id: userId, isInitialized: true });

        return {};
    },
    async getUserGameAchievements(steamId, gameId) {
        // Get user achievements (unlocked & locked)
        let achievements = await axios.get(`${steamAPIBaseUrl}/ISteamUserStats/GetPlayerAchievements/v0001/?key=${steamAPIKey}&steamid=${steamId}&appid=${gameId}`).then((value) => value.data.playerstats.achievements).catch((error) => null);
        // Filter unlocked achievements
        if (achievements != undefined) {
            let unlocked = achievements.filter(achievement => achievement.achieved == 1 ? true : false);
            return unlocked.map(achievement => { return { name: achievement.apiname, unlocktime: achievement.unlocktime } });
        } else {
            return [];
        }
    },
    async getUserSummary(steamId) {
        return await axios.get(`${steamAPIBaseUrl}/ISteamUser/GetPlayerSummaries/v2/?key=${steamAPIKey}&steamids=${steamId}`).then((value) => value.data.response.players[0]).catch((error) => console.log(error));
    },
    async getSchemaForGame(appid) {
        return (await axios.get(`${steamAPIBaseUrl}/ISteamUserStats/GetSchemaForGame/v2/?key=${steamAPIKey}&appid=${appid}`)).data;
    }
}