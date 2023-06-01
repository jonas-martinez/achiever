'use strict'

import steamService from "../services/steamService.js";

export default async function (data, event, api) {
    steamService.getUserGames(api, event.userId, event.steamId);

    return {};
}