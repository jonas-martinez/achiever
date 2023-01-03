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
        let existingGame = (await apiServices.executeQuery(api, "games", {
            "appid": newGame.appid
        })).data;

        if (typeof existingGame === 'undefined' || existingGame.length == 0) {
            let res = await apiServices.createDoc(api, "games", { ...newGame, "userIds": [userId] });
            return res.data;
        } else {
            existingGame = existingGame[0];
            if (existingGame.userIds.indexOf(userId) === -1) {
                existingGame.userIds.push(userId);
            }
            let res = await this.update(api, { ...existingGame, ...newGame });
            return res.data;
        }
    },
}
