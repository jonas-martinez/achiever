'use strict'

import axios from "axios";
import { System } from "../classes/System.js";
import { User } from "../classes/User.js";

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} event 
 * @param {import("@lenra/app").Api} api
 * @returns 
 */
export default async function (userSummary, event, api) {
    let [user] = await api.data.coll(User).find({ id: "@me" });
    user.avatar = userSummary.avatarfull;
    user.personaname = userSummary.personaname;
    await api.data.coll(User).updateDoc(user);
}