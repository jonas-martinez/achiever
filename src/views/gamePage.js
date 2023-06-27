'use strict'

import { DataApi } from '@lenra/app-server';
import { Flex, Actionable, Icon, Text, View } from '@lenra/components';
import { UserGame } from '../classes/UserGame.js';

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
            View('unlockedAchievements').data(DataApi.collectionName(UserGame), {
                user: "@me",
                appid: game.appid
            }),
        ]
    ).direction("vertical").crossAxisAlignment("center").fillParent(true)
}

