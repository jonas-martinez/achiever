'use strict'

import axios from "axios";
import apiServices from './api';

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
    async new(api, newGame) {
        let existingGame = (await apiServices.executeQuery(api, "games", {
            "appid": newGame.appid
        })).data;

        if (typeof existingGame === 'undefined' || existingGame.length == 0) {
            let res = await apiServices.createDoc(api, "games", newGame);
            return res.data;
        } else {
            let res = await this.update(api, { ...existingGame[0], ...newGame });
            return res.data;
        }
    },
}
