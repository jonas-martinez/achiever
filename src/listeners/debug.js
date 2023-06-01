'use strict'

const userService = require("../../services/userService");
const steamService = require("../../services/steamService");
const userGameService = require("../../services/userGameService");


module.exports = async (props, event, api) => {
    userGameService.createDatastore(api);
    let userData = userService.get(api);
    userGameService.new(api, {appid: 1}, userData._id);
    return {}
}
