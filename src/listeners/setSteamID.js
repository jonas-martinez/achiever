'use strict'

const userService = require("../services/userService");
const apiService = require("../services/api");
const navigate = require("../listeners/navigator");

module.exports = async (data, event, api) => {
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