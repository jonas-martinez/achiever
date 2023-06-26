'use strict'

import axios from "axios";
import userService from "../services/userService.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    // TODO: Link games to steamID
    let userData = await userService.get(api);

    if (userData == undefined) {
        userData = (await userService.create(api, { id: "@me", steamId: event.value.steamId })).data;
    } else {
        userData.steamId = event.value.steamId;
        await userService.update(api, userData);
    }


    let res = await createWebhook(api, {
        action: "getUserGames"
    })

    await triggerWebhook(api, res.data.uuid, { userId: userData.id, steamId: userData.steamId });

    return {};
}

function createWebhook(api, params) {
    return axios.post(`${api.url}/app/webhooks`, params, options(api)).catch((error) => console.log(error));
};

function triggerWebhook(api, uuid, props) {
    // TODO: How to get app uuid ?
    return axios.post(`${api.url}/apps/00000000-0000-0000-0000-000000000000/webhooks/${uuid}`, props, options(api)).catch((error) => console.log(error));
};

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}