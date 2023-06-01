'use strict'

import userService from "../services/userService.js";
import userGameService from "../services/userGameService.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    userGameService.createDatastore(api);
    let userData = userService.get(api);
    userGameService.new(api, {appid: 1}, userData._id);
    return {}
}
