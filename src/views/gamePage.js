'use strict'

import { Flex, Actionable, Icon, Text } from '@lenra/components';

export default async function (data, userGame) {
    let game = data[0];

    return Flex(
        [
            Flex(
                [
                    Actionable(
                        Icon("arrow_back")
                    ).onPressed("navigate", { page: "homePage" }),
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

