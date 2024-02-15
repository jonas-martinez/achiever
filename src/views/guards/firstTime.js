import { View } from "@lenra/app"
import GuardsModule from './_guards.js'
import { DataApi } from "@lenra/app";
import { User } from "../../classes/User.js";


export default function ([user], props, context) {
    if (user == undefined) {
        return View("firstTimePage").find(DataApi.collectionName(User), { id: "@me" });
    }

    return GuardsModule([], props, context);
}