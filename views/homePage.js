'use strict'
module.exports = async (data, props) => {
    return {
        type: "flex",
        direction: "vertical",
        scroll: true,
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        fillParent: true,
        children: [
            {
                type: "flex",
                direction: "vertical",
                mainAxisAlignment: "center",
                crossAxisAlignment: "center",
                fillParent: true,
                children: [
                    {
                        type: "text",
                        value: "Achiever."
                    },
                ]
            },
            {
                type: "widget",
                name: "gameList",
                query: {
                    "$find": {
                        "_datastore": "games",
                        "userIds": {
                            "$contains": ["@me"]
                        }
                    }
                },
            }
        ]
    }
}

