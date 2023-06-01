'use strict'

import userService from "../services/userService";
import navigate from "../listeners/navigator";
import steamService from "../services/steamService";
import apiService from "../services/api";

export default async function (data, event, api) {
    steamService.getUserGames(api, event.userId, event.steamId);

    return {};
}