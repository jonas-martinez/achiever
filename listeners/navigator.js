'use strict'

const userService = require("../services/userService");
const steamService = require("../services/steamService");


module.exports = async (props, event, api) => {
    var userData = await userService.get(api);
    console.log("NAVIGATOR");
    console.log(userData);
    switch (props.page) {
        case "firstTimePage":
            return navigateTo(api, userData, "firstTimePage");
        case "homePage":

            // steamService.getUserGames(api, userData.id, userData.steamID);
            return navigateTo(api, userData, "homePage");
        case "gamePage":
            return navigateTo(api, userData, "gamePage", { gameId: props.appid, api: api });
    }
}

function navigateTo(api, userData, page, data = {}) {
    return userService.update(api, {
        ...userData,
        nav: page,
        navData: data
    });
}