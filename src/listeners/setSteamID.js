'use strict'

import axios from "axios";
import { User } from "../classes/User.js";
import { DataApi } from "@lenra/app-server";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    // TODO: Link games to steamID
    let webhook = (await createWebhook(api, {
        action: "getUserGames"
    })).data;

    let userData = (await api.data.find(User, { id: "@me" }))[0];

    if (userData == undefined) {
        userData = await api.data.createDoc(new User("@me", event.value.steamId, webhook.uuid));
    } else {
        userData.steamId = event.value.steamId;
        await api.data.updateDoc(new User(userData.id, event.value.steamId, webhook.uuid));
    }

    // await triggerWebhook(api, webhook.uuid, { userId: userData.id, steamId: userData.steamId });

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