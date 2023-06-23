'use strict'

import { Flex, Actionable, Icon, Text } from '@lenra/components';

export default async function (data, userGame, context) {
    // { pathParams: { appid: 730 } }

    // TODO: Find a way to get the game from the pathParams' appid
    console.log("GAMEPAGE");
    console.log(data);
    console.log(userGame);
    let game = data[0];

    return Flex(
        [
            Flex(
                [
                    Actionable(
                        Icon("arrow_back")
                    ).onPressed("@lenra:navTo", { path: "/" }),
                    Flex(
                        [
                            Text(`${game.name}`).style({ fontSize: 24 })
                        ]
                    ).direction("horizontal")
                ]
            ).direction("vertical").mainAxisAlignment("center").crossAxisAlignment("center").spacing(2)
        ]
    ).direction("horizontal").mainAxisAlignment("center").crossAxisAlignment("center").fillParent(true)
}

