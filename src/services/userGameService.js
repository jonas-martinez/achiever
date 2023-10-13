'use strict'

import { UserGame } from '../classes/UserGame.js';

export default {
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     * @param {Number} gameId
     */
    get(api, gameId) {
        return api.data.find(UserGame, {
            "id": "@me",
            "appid": gameId
        }).then((value) => value.data[0]);
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     */
    get_all(api) {
        return api.data.find(UserGame, {
            "id": "@me"
        }).then((value) => value.data);
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     * @param {UserGame} userGame
     */
    async new(api, userGame) {
        return await api.data.createDoc(userGame);
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     * @param {string} userGameId
     * @param {UserGame} userGame
     */
    put(api, userGameId, userGame) {
        return api.data.updateDoc({ "_id": userGameId, ...userGame })
    }
};