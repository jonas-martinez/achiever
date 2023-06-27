'use strict'

import axios from "axios";
import { System } from "../classes/System.js";
import { User } from "../classes/User.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    let [user] = await api.data.find(User, { id: "@me" });
    await axios.post(`${api.url}/app/${event.value.appId}/webhooks/${user.webhookUuid}`, {
        userId: user.id,
        steamId: user.steamId
    }).catch((error) => {
        console.log(error);
    });

    let [system] = await api.data.find(System, {});
    if (system == undefined) {
        return await api.data.createDoc(new System(event.value.appId));
    }

    system.appId = event.value.appId;
    return await api.data.updateDoc(system);
}