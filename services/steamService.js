'use strict'

const { default: axios } = require("axios");
const gameService = require('../services/gameService');
const userGameService = require("./userGameService");

const steamAPIKey = "CA8F42C8DC798264FCF69D088BB2E918";
const steamAPIBaseUrl = "https://api.steampowered.com";

module.exports = {
    getUserSteamIDFromVanity(vanityUrl) {
        return axios.get(`${steamAPIBaseUrl}/ISteamUser/ResolveVanityURL/v0001/?key=${steamAPIKey}&vanityurl=${vanityUrl}`).then((value) => value.data.response);
    },
    async getUserGames(api, userId, steamId) {
        let games = await axios.get(`${steamAPIBaseUrl}/IPlayerService/GetOwnedGames/v1/?key=${steamAPIKey}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`).then((value) => value.data.response);
        let promises = [];
        games.games.forEach(game => {
            if (game !== undefined) {
                promises.push(new Promise(async () => {
                    // Add game in datastore
                    await gameService.new(api, game, userId);
                    // Add achievements to game
                    let achievements = await this.getGameAchievements(steamId, game.appid)
                    await gameService.put(api, { ...game, achievements: achievements });
                    // Add user game achievements in datastore
                    let unlockedAchievements = await this.getUserGameAchievements(api, userId, steamId, game.appid);
                    // TODO: Also add play time
                    await userGameService.new(api, { appid: game.appid, achieved: unlockedAchievements }, userId)
                }));
            }
        });
        return await Promise.all(promises);
    },
    async getGameAchievements(steamId, gameId) {
        // Get user game achievements as there is not API to get game achievements directly
        let achievements = await axios.get(`${steamAPIBaseUrl}/ISteamUserStats/GetPlayerAchievements/v0001/?key=${steamAPIKey}&steamid=${steamId}&appid=${gameId}`).then((value) => value.data.playerstats.achievements);
        // Return array of achievements apiname
        return achievements.map(achievement => achievement.apiname);
    },
    async getUserGameAchievements(steamId, gameId) {
        // Get user achievements (unlocked & locked)
        let achievements = await axios.get(`${steamAPIBaseUrl}/ISteamUserStats/GetPlayerAchievements/v0001/?key=${steamAPIKey}&steamid=${steamId}&appid=${gameId}`).then((value) => value.data.playerstats.achievements);

        // Filter unlocked achievements
        let unlocked = achievements.filter(achievement => achievement.achieved == 1 ? true : false);

        return unlocked.map(achievement => achievement.apiname);
    },
    put(api, userId, data) {
        return axios.put(`${api.url}/app/datastores/_users/data/${userId}`, data, headers(api));
    }
}

function headers(api) {
    return { headers: { Authorization: `Bearer ${api.token}` } };
}