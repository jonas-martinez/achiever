'use strict'

// const userService = require("../services/userService");

module.exports = async (data, event, api) => {
    console.log("Validate first time");
    console.log(data);
    console.log(event);
    console.log(api);
    // TODO: Make sure that the SteamID is properly set in data
    // TODO: Navigate to homePage
    
    // console.log((await userService.get(api)).data.data[0]);
    return {};
    // return counterService.put(api, counter);
}