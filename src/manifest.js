import { View } from "@lenra/app"
import GuardsModule from './views/guards/_guards.js'
import { DataApi } from "@lenra/app"
import { User } from "./classes/User.js"

export const lenra =
{
    routes: [
        {
            path: "/",
            view: GuardsModule([], {
                page: View("homePage").find(DataApi.collectionName(User), { id: "@me" }).context({ me: true }),
                guards: [
                    View("guards.firstTime")
                        .find(DataApi.collectionName(User), { id: "@me" }).context({ me: true }),
                    View("guards.welcome").find(DataApi.collectionName(User), { id: "@me" }).context({ me: true }),
                ],
            }).context({ pathParams: true })
        },
        {
            path: "/game/:appid",
            view: GuardsModule([], {
                page: View("gamePageDataProvider"),
                guards: [
                    View("guards.firstTime")
                        .find(DataApi.collectionName(User), { id: "@me" }).context({ me: true }),
                ],
            }).context({ pathParams: true })
        },
    ]
}