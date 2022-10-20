'use strict'

const userService = require("../services/userService");

module.exports = async (data, event, api) => {
    let userData = await userService.get(api);
    userData.steamID = event.value;
    await userService.update(api, userData);
    
    return {};
}