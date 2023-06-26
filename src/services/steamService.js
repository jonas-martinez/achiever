'use strict'

import axios from "axios";
import gameService from '../services/gameService.js';
import userGameService from "./userGameService.js";
import { Game } from "../classes/Game.js";
import { UserGame } from "../classes/UserGame.js";

const steamAPIKey = "CA8F42C8DC798264FCF69D088BB2E918";
const steamAPIBaseUrl = "https://api.steampowered.com";

export default {
    getUserSteamIDFromVanity(vanityUrl) {
        return axios.get(`${steamAPIBaseUrl}/ISteamUser/ResolveVanityURL/v0001/?key=${steamAPIKey}&vanityurl=${vanityUrl}`).then((value) => value.data.response).catch((error) => console.log(error));
    },
    async getUserGames(api, userId, steamId) {
        let games = await axios.get(`${steamAPIBaseUrl}/IPlayerService/GetOwnedGames/v1/?key=${steamAPIKey}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`).then((value) => value.data.response).catch((error) => console.log(error));
        let promises = [];
        games.games.forEach(game => {
            if (game !== undefined) {
                promises.push(new Promise(async () => {
                    // Add achievements to game
                    let achievements = await this.getGameAchievements(steamId, game.appid);

                    // Add game in db
                    await gameService.new(api, new Game(game.appid, achievements, game.img_icon_url, game.name));
                    // Add user game achievements and playtime in db
                    let unlockedAchievements = await this.getUserGameAchievements(steamId, game.appid);

                    await userGameService.new(api, new UserGame(game.appid, unlockedAchievements, userId, game.playtime_forever));
                }).catch((error) => console.log(error)));
            }
        });
        return await Promise.all(promises);
    },
    async getGameAchievements(steamId, gameId) {
        // Get user game achievements as there is not API to get game achievements directly
        let achievements = await axios.get(`${steamAPIBaseUrl}/ISteamUserStats/GetPlayerAchievements/v0001/?key=${steamAPIKey}&steamid=${steamId}&appid=${gameId}`).then((value) => value.data.playerstats.achievements).catch((error) => null);
        if (achievements != undefined && achievements != null) {
            // Return array of achievements apiname
            return achievements.map(achievement => achievement.apiname);
        }
    },
    async getUserGameAchievements(steamId, gameId) {
        // Get user achievements (unlocked & locked)
        let achievements = await axios.get(`${steamAPIBaseUrl}/ISteamUserStats/GetPlayerAchievements/v0001/?key=${steamAPIKey}&steamid=${steamId}&appid=${gameId}`).then((value) => value.data.playerstats.achievements).catch((error) => null);
        // Filter unlocked achievements
        if (achievements != undefined) {
            let unlocked = achievements.filter(achievement => achievement.achieved == 1 ? true : false);
            return unlocked.map(achievement => achievement.apiname);
        } else {
            return [];
        }
    },
}