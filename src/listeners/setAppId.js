'use strict'

import axios from "axios";
import { User } from "../classes/User.js";

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} event 
 * @param {import("@lenra/app").Api} api
 * @returns 
 */
export default async function (props, event, api) {
    let [user] = await api.data.coll(User).find({ id: "@me" });
    
    axios.post(`${api.url}/apps/${event.value.appId}/webhooks/${user.webhookUuid}`, {
        userId: user.id,
        steamId: user.steamId
    }).catch((error) => {
        console.log(error);
    });

    return {};

    // let [system] = await api.data.coll(System).find({});
    // if (system == undefined) {
    //     return await api.data.coll(System).createDoc(new System(event.value.appId));
    // }

    // system.appId = event.value.appId;
    // return await api.data.coll(System).updateDoc(system);
}