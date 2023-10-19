'use strict'

import { Game } from '../classes/Game.js';

export default {
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     * @param {Number} gameId
     */
    get(api, gameId) {
        return api.data.coll(Game).find({ "appid": gameId }).then((value) => value.data[0]);
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     */
    get_all(api) {
        return api.data.coll(Game).find({}).then((value) => value.data);
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     * @param {Game} game 
     */
    update(api, game) {
        return api.data.coll(Game).updateDoc(game);
    },
    /**
     * 
     * @param {import("@lenra/app").Api} api 
     * @param {Game} game 
     */
    async new(api, game) {
        let existingGame = (await api.data.coll(Game).find({
            "appid": game.appid
        })).data;

        if (typeof existingGame === 'undefined' || existingGame.length == 0) {
            let res = await api.data.coll(Game).createDoc(game);
            return res.data;
        } else {
            let res = await this.update(api, { ...existingGame[0], ...game });
            return res.data;
        }
    },
}
