'use strict'

import axios from "axios";
import userService from "../services/userService.js";
import navigate from "../listeners/navigator.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    let userData = await userService.get(api);
    userData.steamId = event.value.steamId;
    await userService.update(api, userData);

    let res = await createWebhook(api, {
        action: "getUserGames"
    })

    await triggerWebhook(api, res.data.uuid, { userId: userData.id, steamId: userData.steamId });

    await navigate({ page: "homePage" }, {}, api);

    return {};
}

function createWebhook(api, params) {
    return axios.post(`${api.url}/app/webhooks`, params, options(api)).catch((error) => console.log(error));
};

function triggerWebhook(api, uuid, props) {
    // TODO: How to get app uuid ?
    return axios.post(`${api.url}/apps/:app_uuid/webhooks/${uuid}`, props, options(api)).catch((error) => console.log(error));
};