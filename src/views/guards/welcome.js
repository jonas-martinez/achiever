import { View } from "@lenra/app"
import GuardsModule from './_guards.js'
import { DataApi } from "@lenra/app";
import { User } from "../../classes/User.js";
import steamService from "../../services/steamService.js"


export default async function ([user], props, context) {
    let userSummary = await steamService.getUserSummary(user.steamId);

    if (user.avatar == undefined) {
        return View("welcome").find(DataApi.collectionName(User), { id: "@me" }).props(userSummary);
    }

    return GuardsModule([], props, context);
}