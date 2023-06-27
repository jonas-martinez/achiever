import { View } from "@lenra/components"
import GuardsModule from './_guards.js'
import { DataApi } from "@lenra/app-server";
import { User } from "../../classes/User.js";


export default function ([user], props, context) {
    if (user == undefined) {
        return View("firstTimePage").data(DataApi.collectionName(User), { id: "@me" });
    }

    return GuardsModule([], props, context);
}