'use strict'

import { DataApi } from "@lenra/app-server";
import userGameService from "../services/userGameService.js";
import { User } from "../classes/User.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    userGameService.createDatastore(api);
    let userData = (await api.data.find(User, { id: "@me" }))[0];
    userGameService.new(api, {appid: 1}, userData._id);
    return {}
}
