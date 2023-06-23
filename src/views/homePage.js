'use strict'

import { Flex, Text, Button, Flexible, Container, View } from '@lenra/components'
import { UserGame } from '../classes/UserGame.js';
import { DataApi } from '@lenra/app-server';

export default async function (data, props) {
    return Flex(
        [
            Flex(
                [
                    Text("Achiever").style({ fontSize: 24 }),
                    Button("DEBUG BUTTON").onPressed("debug"),
                    Flexible(
                        Container(
                            View("gameList").data(DataApi.collectionName(UserGame), { user: "@me" }),
                        ).maxWidth(600).maxHeight(600)
                    )
                ]
            ).direction("vertical")
                .mainAxisAlignment("center")
                .crossAxisAlignment("center")
                .spacing(2)
        ]
    ).direction("horizontal")
        .mainAxisAlignment("center")
        .crossAxisAlignment("center")
        .fillParent(true);
}

