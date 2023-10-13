'use strict'

import { User } from "../classes/User.js";
import { Game } from "../classes/Game.js";
import { UserGame } from "../classes/UserGame.js";
import apiServices from "../services/api.js";
import { DataApi } from "@lenra/app";

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} event 
 * @param {import("@lenra/app").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    const colls = [DataApi.collectionName(User), DataApi.collectionName(Game), DataApi.collectionName(UserGame)];
    colls.forEach(async (coll) => {
        await (await api.data.find(coll, {})).forEach((doc) => {
            apiServices.deleteDoc(api, coll, doc);
        });
    });

    return {};
}
