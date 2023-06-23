'use strict'

import { DataApi } from "@lenra/app-server";
import { Actionable, Container, Image, Text, View, Flex } from "@lenra/components";
import { UserGame } from "../classes/UserGame.js";

export default async function (data, userGame) {
    let game = data[0];
    let minutesPlayed = userGame.playtimeForever % 60;
    let hoursPlayed = Math.floor(userGame.playtimeForever / 60);

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
                            View("gameCardAchievements").data(DataApi.collectionName(UserGame), {
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

