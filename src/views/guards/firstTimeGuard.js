import { View } from "@lenra/components"
import GuardsModule from './_guards.js'


export default function ([user], props, context) {
    if (user == undefined) {
        return View("firstTimePage").data("users", { id: "@me" });
    }

    return GuardsModule([], props, context);
}