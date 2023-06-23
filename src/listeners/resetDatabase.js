'use strict'

import userService from "../services/userService.js";
import apiServices from "../services/api.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    const colls = ["users", "games", "userGames"];
    colls.forEach(async (coll) => {
        await (await apiServices.executeQuery(api, coll, {})).data.forEach((doc) => {
            apiServices.deleteDoc(api, coll, doc);
        });
    });

    await userService.create(api, {
        id: "@me",
        nav: "firstTimePage"
    });

    return {};
}
