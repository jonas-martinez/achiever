'use strict'

const userService = require("../services/userService");
const apiService = require("../services/api");
const navigate = require("../listeners/navigator");

module.exports = async (data, event, api) => {
    let userData = await userService.get(api);
    userData.steamID = event.value.steamID;
    await userService.update(api, userData);

    let res = await apiService.createWebhook(api, {
        action: "getUserGames"
    })

    console.log("WEBHOOK");
    console.log(res.data);

    let uuid = res.data.uuid;

    let trigger = await apiService.triggerWebhook(api, uuid, { userId: userData.id, steamID: userData.steamID });

    console.log(trigger.data);

    await navigate({ page: "homePage" }, {}, api);

    return {};
}