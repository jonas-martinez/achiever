'use strict'

import { Actionable, Container, Image, Text, View, Flex, Icon } from "@lenra/components";

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
                            Text(game.name).style({ fontWeight: 'bold', fontSize: 16, color: 0xFFFFFFFF }),
                            Flex([
                                Icon("timer").color(0xFF1a9925),
                                Text(`${hoursPlayed}h ${minutesPlayed}m`).style({ color: 0xFFaaabad }),
                            ]).direction('horizontal').crossAxisAlignment('center').spacing(4),
                            Flex([
                                Icon("emoji_events").color(0xFFd4af37),
                                Text(`${userGame.achieved.length} achievements`).style({ color: 0xFFaaabad }),
                            ]).direction('horizontal').crossAxisAlignment('center').spacing(4),
                        ]
                    ).direction("vertical").spacing(4)
                ]
            ).spacing(8)
        )
            .constraints({
                minWidth: -1,
                maxWidth: -1
            })
            .padding({
                bottom: 4,
                left: 4,
                right: 4,
                top: 4,
            })
            .border({
                bottom: { color: 0xFFaaabad },
                left: { color: 0xFFaaabad },
                right: { color: 0xFFaaabad },
                top: { color: 0xFFaaabad }
            })
    ).onPressed("@lenra:navTo", { path: `/game/${userGame.appid}` })
}

