import { View } from "@lenra/components"
import GuardsModule from './views/guards/_guards.js'

export const lenraRoutes = [
    {
        path: "/",
        view: GuardsModule([], {
            page: View("homePage"),
            guards: [
                View("guards.firstTimeGuard")
                    .data("users", { id: "@me" }).context({ me: true }),
            ],
        }).context({ pathParams: true })
    },
    {
        path: "/game/:appid",
        view: GuardsModule([], {
            page: View("gamePageDataProvider"),
            guards: [
                View("guards.firstTimeGuard")
                    .data("users", { id: "@me" }).context({ me: true }),
            ],
        }).context({ pathParams: true })
    },
]