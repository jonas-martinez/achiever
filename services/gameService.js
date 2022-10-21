'use strict'

const { default: axios } = require("axios");
const apiServices = require('./api');

module.exports = {
    get(api, gameId) {
        return apiServices.executeQuery(api, "games", { "appid": gameId }).then((value) => value.data[0]);
    },
    get_all(api) {
        return apiServices.get_all(api, "games").then((value) => value.data);
    },
    update(api, game) {
        return apiServices.updateDoc(api, "games", game);
    },
    async new(api, newGame, userId) {
        let all = await this.get_all(api)
        let exists = false;
        let existingGame = {};
        all.map(game => {
            if (game.appid == newGame.appid) {
                exists = true;
                existingGame = game;
            }
        })
        if (!exists) {
            let res = await apiServices.createDoc(api, "games", { ...newGame, "userIds": [userId] });
            return res.data;
        } else {
            if (existingGame.userIds.indexOf(userId) === -1) {
                existingGame.userIds.push(userId);
            }
            let res = await this.update(api, existingGame);
            return res.data;
        }
    },
}
