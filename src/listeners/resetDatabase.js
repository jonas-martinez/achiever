'use strict'

import apiService from "../services/api.js";
import userService from "../services/userService.js";


export default async function (props, event, api) {
    const colls = ["users", "games", "userGames"];
    colls.forEach(async (coll) => {
        await (await apiService.executeQuery(api, coll, {})).data.forEach((doc) => {
            apiService.deleteDoc(api, coll, doc)
        });
    });

    await userService.create(api, {
        id: "@me",
        nav: "firstTimePage"
    });

    return {};
}
