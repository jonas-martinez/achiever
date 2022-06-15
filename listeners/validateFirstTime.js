'use strict'

const { default: axios } = require("axios");
const userService = require("../services/userService");

module.exports = async (data, event, api) => {
    console.log("Validate first time");
    console.log(data);
    console.log(event);
    console.log(api);
    
    let userData = await userService.get(api);
    console.log(userData);
    
    // TODO: Navigate to homePage

    return {};
}