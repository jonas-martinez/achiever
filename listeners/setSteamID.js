'use strict'

const userService = require("../services/userService");
const navigate = require("../listeners/navigator");

module.exports = async (data, event, api) => {
    let userData = await userService.get(api);
    userData.steamID = event.value.steamID;
    await userService.update(api, userData);

    await navigate({page: "homePage"}, {}, api);

    return {};
}