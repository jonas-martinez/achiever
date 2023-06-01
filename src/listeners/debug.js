'use strict'

import userService from "../services/userService.js";
import userGameService from "../services/userGameService.js";


export default async function (props, event, api) {
    userGameService.createDatastore(api);
    let userData = userService.get(api);
    userGameService.new(api, {appid: 1}, userData._id);
    return {}
}
