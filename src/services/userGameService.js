'use strict'

import { UserGame } from '../classes/UserGame.js';

export default {
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     * @param {Number} gameId
     */
    get(api, gameId) {
        return api.data.coll(UserGame).find({
            "id": "@me",
            "appid": gameId
        }).then((value) => value.data[0]);
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     */
    get_all(api) {
        return api.data.coll(UserGame).find({
            "id": "@me"
        }).then((value) => value.data);
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     * @param {UserGame} userGame
     */
    async new(api, userGame) {
        return await api.data.coll(UserGame).createDoc(userGame);
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     * @param {string} userGameId
     * @param {UserGame} userGame
     */
    put(api, userGameId, userGame) {
        return api.data.coll(UserGame).updateDoc({ "_id": userGameId, ...userGame })
    }
};