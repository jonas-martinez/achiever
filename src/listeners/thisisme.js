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
export default async function (userSummary, event, api) {
    let [user] = await api.data.find(User, { id: "@me" });
    user.avatar = userSummary.avatarfull;
    user.personaname = userSummary.personaname;
    await api.data.updateDoc(user);
}