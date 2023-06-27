import { View } from "@lenra/components"
import GuardsModule from './_guards.js'
import { DataApi } from "@lenra/app-server";
import { User } from "../../classes/User.js";
import steamService from "../../services/steamService.js"


export default async function ([user], props, context) {
    let userSummary = await steamService.getUserSummary(user.steamId);

    if (user.avatar == undefined) {
        return View("welcome").data(DataApi.collectionName(User), { id: "@me" }).props(userSummary);
    }

    return GuardsModule([], props, context);
}