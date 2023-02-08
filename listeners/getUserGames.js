'use strict'

const userService = require("../services/userService");
const navigate = require("../listeners/navigator");
const steamService = require("../services/steamService");
const apiService = require("../services/api");

module.exports = async (data, event, api) => {
    steamService.getUserGames(api, event.userId, event.steamId);

    return {};
}