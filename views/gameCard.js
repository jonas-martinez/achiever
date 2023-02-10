'use strict'

module.exports = async (data, userGame) => {
    let game = data[0];
    let minutesPlayed = game.playtime_forever % 60;
    let hoursPlayed = Math.floor(game.playtime_forever / 60);

    return {
        type: "actionable",
        onPressed: {
            action: "navigate",
            props: {
                page: "gamePage",
                appid: userGame.appid,
            }
        },
        child: {
            type: "container",
            constraints: {
                minWidth: -1,
                maxWidth: -1,
            },
            padding: {
                bottom: 1,
                left: 1,
                right: 1,
                top: 1
            },
            border: {
                bottom: {},
                left: {},
                top: {},
                right: {}
            },
            child: {
                type: "flex",
                spacing: 1,
                children: [
                    {
                        type: "image",
                        src: `https://cdn.cloudflare.steamstatic.com/steam/apps/${userGame.appid}/capsule_231x87.jpg`,
                        // 349480 is the default image for games that don't have a picture
                    },
                    {
                        type: "flex",
                        direction: "vertical",
                        spacing: 1,
                        children: [
                            {
                                type: "text",
                                value: game.name
                            },
                            {
                                type: "text",
                                value: `${hoursPlayed}h ${minutesPlayed}m`
                            },
                            {
                                type: "view",
                                name: "gameCardAchievements",
                                coll: "userGames",
                                query: {
                                    "userId": "@me",
                                    "appid": userGame.appid
                                }
                            }
                        ]
                    },

                ]
            }
        }
    }
}

