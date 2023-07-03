'use strict'

import { DataApi } from '@lenra/app-server';
import { Flex, Actionable, Icon, Text, View, Image, Container } from '@lenra/components';
import { UserGame } from '../classes/UserGame.js';

export default async function ([userGame], game, _context) {
    let unlockedAchievements = game.achievements.filter((achievement) => {
        return userGame.achieved.some(achieved => achieved.name == achievement.name);
    });

    return Container(
        Flex(
            // userGame.achieved.map((achievement) => {
            //     return Text(achievement);
            // })
            unlockedAchievements.map((achievement) => {
                return Container(
                    Flex([
                        Image(achievement.icon),
                        Flex([
                            Text(achievement.displayName).style({ fontSize: 20, fontWeight: 'bold' }),
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

