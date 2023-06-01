'use strict'

import axios from "axios";
import apiServices from './api';

module.exports = {
    get(api, gameId) {
        return apiServices.executeQuery(api, "userGames", {
            "id": "@me",
            "appid": gameId
        }).then((value) => value.data[0]);
    },
    get_all(api) {
        return apiServices.executeQuery(api, "userGames", {
            "id": "@me"
        }).then((value) => value.data);
    },
    async new(api, userId, newUserGame) {
        return await apiServices.createDoc(api, "userGames", { ...newUserGame, "userId": userId });
    },
    put(api, userGameId, data) {
        return apiServices.updateDoc(api, "userGames", { "_id": userGameId, ...data })
    }
};