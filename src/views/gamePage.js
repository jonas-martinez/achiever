'use strict'

import { Flex, Actionable, Icon, Text } from '@lenra/components';

export default async function ([game], _props, _context) {
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
            ).direction("horizontal").mainAxisAlignment("center").crossAxisAlignment("center").spacing(2).fillParent(true),

        ]
    ).direction("vertical").crossAxisAlignment("center").fillParent(true)
}

