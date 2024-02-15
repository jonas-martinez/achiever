'use strict'

import userGameService from "../services/userGameService.js";
import { User } from "../classes/User.js";

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} event 
 * @param {import("@lenra/app").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    userGameService.createDatastore(api);
    let userData = (await api.data.coll(User).find({ id: "@me" }))[0];
    userGameService.new(api, {appid: 1}, userData._id);
    return {}
}
