'use strict'

const userService = require("../services/userService");

module.exports = async (data, event, api) => {
    console.log("SET SteamID");
    console.log(data);
    console.log(event);
    console.log(api);
    console.log((await userService.get_test(api)).data.data);
    return {};
    // return counterService.put(api, counter);
}