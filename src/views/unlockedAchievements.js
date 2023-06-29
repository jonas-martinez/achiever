'use strict'

import { DataApi } from '@lenra/app-server';
import { Flex, Actionable, Icon, Text, View, Image, Container } from '@lenra/components';
import { UserGame } from '../classes/UserGame.js';

export default async function ([userGame], game, _context) {
    return Container(
        Flex(
            // userGame.achieved.map((achievement) => {
            //     return Text(achievement);
            // })
            game.achievements.map((achievement) => {
                // const achievementIcon = achievement.icon.replace(/https:\/\/steamcdn-a\.akamaihd\.net/g, 'https://cdn.cloudflare.steamstatic.com');

                return Container(
                    Flex([
                        Image(achievement.icon),
                        Flex([
                            Text(achievement.displayName),
                            Text(achievement.description)
                        ]).direction('vertical')
                    ])
                ).border({
                    bottom: {},
                    left: {},
                    right: {},
                    top: {}
                }).minWidth(600).maxWidth(600).padding({
                    bottom: 6,
                    left: 6,
                    right: 6,
                    top: 6,
                })
            })
        ).direction("vertical").crossAxisAlignment("center").spacing(16).scroll(true)
    ).maxHeight(600)
}

