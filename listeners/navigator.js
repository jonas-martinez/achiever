'use strict'

const userService = require("../services/userService");
const steamService = require("../services/steamService");


module.exports = async (props, event, api) => {
    var userData = await userService.get(api);
    switch (props.page) {
        case "firstTimePage":
            return navigateTo(api, userData._id, userData, "firstTimePage");
        case "homePage":
            console.log("GETTING USER GAMES");
            await steamService.getUserGames(api, userData._id, userData.steamID);
            console.log("GETTING USER GAMES DONE");
            console.log("\n\nNAVIGATING TO HOME PAGE\n\n");
            return navigateTo(api, userData._id, userData, "homePage");
    }
}

function navigateTo(api, userId, userData, page) {
    return userService.put(api, userId, {
        ...userData,
        nav: page
    });
}