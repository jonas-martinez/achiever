'use strict'

const { default: axios } = require("axios");
const gameService = require('../services/gameService');

const steamAPIKey = "CA8F42C8DC798264FCF69D088BB2E918";
const steamAPIBaseUrl = "https://api.steampowered.com";

module.exports = {
    getUserSteamIDFromVanity(api, userId, vanityUrl) {
        return axios.get(`${steamAPIBaseUrl}/ISteamUser/ResolveVanityURL/v0001/?key=${steamAPIKey}&vanityurl=${vanityUrl}`).then((value) => value.data.response);
    },
    getUserGames(api, userId, steamId) {
        let games = axios.get(`${steamAPIBaseUrl}/IPlayerService/GetOwnedGames/v1/?key=${steamAPIKey}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`).then((value) => value.data.response);
        // TODO: Add each game to "games" datastore, and add userId to ref_by field
        games.games.forEach(game => {
            // TODO: If the game already exists, update the ref_by field by adding userId
            await gameService.new(api, game);
            gameService.update(api, game.appid, { ref_by: userId });
        });
        return games;
    },
    put(api, userId, data) {
        return axios.put(`${api.url}/app/datastores/_users/data/${userId}`, data, headers(api));
    }
}

function headers(api) {
    return { headers: { Authorization: `Bearer ${api.token}` } };
}