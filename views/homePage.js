'use strict'
module.exports = async (data, props) => {
    return {
        type: "flex",
        direction: "horizontal",
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        fillParent: true,
        children: [
            {
                type: "flex",
                direction: "vertical",
                mainAxisAlignment: "center",
                crossAxisAlignment: "center",
                spacing: 2,
                children: [
                    {
                        type: "text",
                        style: {
                            fontSize: 24
                        },
                        value: "Achiever"
                    },
                    {
                        type: "button",
                        text: "DEBUG BUTTON",
                        onPressed: {
                            action: "debug"
                        }
                    },
                    {
                        type: "flexible",
                        child: {
                            type: "container",
                            constraints: {
                                maxWidth: 600,
                                minWidth: 600
                            },
                            child: {
                                type: "view",
                                name: "gameList",
                                coll: "userGames",
                                query: {
                                    userId: "@me"
                                },
                            }
                        }
                    }

                ]
            },
        ]
    }
}

