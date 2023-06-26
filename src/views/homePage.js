'use strict'

import { Flex, Text, Button, Flexible, Container, View, TextField } from '@lenra/components'
import { UserGame } from '../classes/UserGame.js';
import { DataApi } from '@lenra/app-server';

export default async function ([user], props, context) {
    return Flex(
        [
            Flex(
                [
                    Text("Achiever").style({ fontSize: 24 }),
                    Button("DEBUG BUTTON").onPressed("debug"),
                    Text("To load or update your games, please send a POST request to the following URL with the corresponding data."),
                    Container(TextField(`<lenra_domain_name>/apps/<lenra_app_uuid>/webhooks/${user.webhookUuid}`)).maxWidth(600),
                    Container(TextField(`{ "userId": "${user.id}", "steamId": "${user.steamId}" }`)).maxWidth(600),
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

