export const lenraRoutes = [
    {
        path: "/",
        view: {
            type: "view",
            name: "main",
            context: {
                pathParams: true
            }
        }
    },
    {
        path: "/game/:appid",
        view: {
            type: "view",
            name: "gamePageDataProvider",
            context: {
                pathParams: true
            }
        }
    },
    {
        path: "/first-time",
        view: {
            type: "view",
            name: "firstTimePage",
            find: {
                coll: "users",
                query: {
                    id: "@me"
                }
            }
        }
    }
]