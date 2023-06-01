'use strict'

import userService from "../services/userService.js";
import apiService from "../services/api.js";
import navigate from "../listeners/navigator.js";

export default async function (data, event, api) {
    let userData = await userService.get(api);
    userData.steamId = event.value.steamId;
    await userService.update(api, userData);

    let res = await apiService.createWebhook(api, {
        action: "getUserGames"
    })

    await apiService.triggerWebhook(api, res.data.uuid, { userId: userData.id, steamId: userData.steamId });

    await navigate({ page: "homePage" }, {}, api);

    return {};
}