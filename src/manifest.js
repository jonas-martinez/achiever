import { View } from "@lenra/components"
import GuardsModule from './views/guards/_guards.js'
import { DataApi } from "@lenra/app-server"
import { User } from "./classes/User.js"

export const lenraRoutes = [
    {
        path: "/",
        view: GuardsModule([], {
            page: View("homePage").data(DataApi.collectionName(User), { id: "@me" }).context({ me: true }),
            guards: [
                View("guards.firstTime")
                    .data(DataApi.collectionName(User), { id: "@me" }).context({ me: true }),
                View("guards.welcome").data(DataApi.collectionName(User), { id: "@me" }).context({ me: true }),
            ],
        }).context({ pathParams: true })
    },
    {
        path: "/game/:appid",
        view: GuardsModule([], {
            page: View("gamePageDataProvider"),
            guards: [
                View("guards.firstTime")
                    .data(DataApi.collectionName(User), { id: "@me" }).context({ me: true }),
            ],
        }).context({ pathParams: true })
    },
]