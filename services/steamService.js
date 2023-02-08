'use strict'

const { default: axios } = require("axios");
const gameService = require('../services/gameService');
const userGameService = require("./userGameService");
const userService = require("./userService");
const apiServices = require('./api');

const steamAPIKey = "CA8F42C8DC798264FCF69D088BB2E918";
const steamAPIBaseUrl = "https://api.steampowered.com";

module.exports = {
    getUserSteamIDFromVanity(vanityUrl) {
        return axios.get(`${steamAPIBaseUrl}/ISteamUser/ResolveVanityURL/v0001/?key=${steamAPIKey}&vanityurl=${vanityUrl}`).then((value) => value.data.response).catch((error) => console.log(error));
    },
    async getUserGames(api, userId, steamId) {
        let games = await axios.get(`${steamAPIBaseUrl}/IPlayerService/GetOwnedGames/v1/?key=${steamAPIKey}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`).then((value) => value.data.response).catch((error) => console.log(error));
        let promises = [];
        games.games.forEach(game => {
            if (game !== undefined) {
                promises.push(new Promise(async () => {
                    // Add game in db
                    // TODO: Remove useless fields such as playtime_xxx and others that are user related.
                    await gameService.new(api, game);
                    // Add achievements to game
                    let achievements = await this.getGameAchievements(steamId, game.appid);
                    await gameService.new(api, { ...game, achievements: achievements });
                    // Add user game achievements and playtime in db
                    let unlockedAchievements = await this.getUserGameAchievements(steamId, game.appid);
                    await userGameService.new(api, userId, { appid: game.appid, achieved: unlockedAchievements, playtime_forever: game.playtime_forever });
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
    put(api, userId, data) {
        return apiServices.updateDoc(api, "users", { "id": userId, ...data });
        //return axios.put(`${api.url}/app/datastores/_users/data/${userId}`, data, headers(api));
    }
}