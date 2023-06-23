'use strict'

import userService from "../services/userService.js";


/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    var userData = await userService.get(api);
    switch (props.page) {
        case "firstTimePage":
            return navigateTo(api, userData, "firstTimePage");
        case "homePage":

            // steamService.getUserGames(api, userData.id, userData.steamId);
            return navigateTo(api, userData, "homePage");
        case "gamePage":
            return navigateTo(api, userData, "gamePage", { appid: props.appid });
    }
}

function navigateTo(api, userData, page, data = {}) {
    return userService.update(api, {
        ...userData,
        nav: page,
        navData: data
    });
}