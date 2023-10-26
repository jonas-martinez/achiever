'use strict'

import steamService from "../services/steamService.js";

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} event 
 * @param {import("@lenra/app").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    await steamService.getUserGames(api, event.userId, event.steamId);

    return {};
}