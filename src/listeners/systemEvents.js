'use strict'

import userService from "../services/userService.js";

/**
 * 
 * @param {import("@lenra/app-server").props} _props 
 * @param {import("@lenra/app-server").event} _event 
 * @param {import("@lenra/app-server").Api} api 
 */
export async function onEnvStart(_props, _event, api) {

}

export async function onUserFirstJoin(_props, _event, api) {
    await userService.create(api, {
        id: "@me",
        nav: "firstTimePage"
    });
}

export async function onSessionStart(_props, _event, _api) {

}