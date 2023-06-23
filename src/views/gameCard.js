'use strict'

import { Actionable, Container, Image, Text, View, Flex } from "@lenra/components";

export default async function (data, userGame) {
    let game = data[0];
    let minutesPlayed = game.playtime_forever % 60;
    let hoursPlayed = Math.floor(game.playtime_forever / 60);

    return Actionable(
        Container(
            Flex(
                [
                    // 349480 is the default image for games that don't have a picture
                    Image(`https://cdn.cloudflare.steamstatic.com/steam/apps/${userGame.appid}/capsule_231x87.jpg`),
                    Flex(
                        [
                            Text(game.name),
                            Text(`${hoursPlayed}h ${minutesPlayed}m`),
                            View("gameCardAchievements").coll("userGames").query({
                                userId: "@me",
                                appid: userGame.appid
                            })
                        ]
                    ).direction("vertical").spacing(1)
                ]
            ).spacing(1)
        )
            .constraints({
                minWidth: -1,
                maxWidth: -1
            })
            .padding({
                bottom: 1,
                left: 1,
                right: 1,
                top: 1,
            })
            .border({
                bottom: {},
                left: {},
                right: {},
                top: {}
            })
    ).onPressed("@lenra:navTo", { path: `/game/${userGame.appid}` })
}

