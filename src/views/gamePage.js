'use strict'

import { DataApi } from '@lenra/app';
import { Flex, Actionable, Icon, Text, View } from '@lenra/app';
import { UserGame } from '../classes/UserGame.js';
import steamService from '../services/steamService.js';

export default async function ([game], _props, _context) {
    // let schema = await steamService.getSchemaForGame(game.appid);
    // if (schema?.game?.availableGameStats?.achievements) {
    //     console.log(schema.game.availableGameStats.achievements);
    // }


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
            View('unlockedAchievements').find(DataApi.collectionName(UserGame), {
                user: "@me",
                appid: game.appid
            }).props(game),
        ]
    ).direction("vertical").crossAxisAlignment("center").fillParent(true)
}

