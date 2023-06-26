'use strict'

import { User } from "../classes/User.js";
import { Game } from "../classes/Game.js";
import { UserGame } from "../classes/UserGame.js";
import apiServices from "../services/api.js";
import { DataApi } from "@lenra/app-server";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    const colls = [DataApi.collectionName(User), DataApi.collectionName(Game), DataApi.collectionName(UserGame)];
    colls.forEach(async (coll) => {
        await (await apiServices.executeQuery(api, coll, {})).data.forEach((doc) => {
            apiServices.deleteDoc(api, coll, doc);
        });
    });

    return {};
}
