'use strict'

import { Flex, Form, Text, Button, Flexible, Container, View, TextField } from '@lenra/app'
import { UserGame } from '../classes/UserGame.js';
import { DataApi } from '@lenra/app';

export default async function ([user], props, context) {
    console.log(user);
    return Container(
        Flex(
            [
                Flex(
                    [
                        Text("Achiever").style({ fontSize: 24, fontWeight: 'bold', color: 0xFFFFFFFF }),
                        // Button("DEBUG BUTTON").onPressed("debug"),
                        Text("To load or update your games, please enter this lenra application uuid in the text field below.").style({
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 0xFFaaabad
                        }),
                        Container(
                            Form(
                                Flex(
                                    [
                                        Container(TextField('').style({
                                            decoration: {
                                                labelText: 'Please enter the id of this app to get your games',
                                                labelStyle: { color: 0xFF000000 },
                                                fillColor: 0xFFaaabad,
                                                filled: true,
                                            }
                                        }).name('appId')).maxWidth(500),
                                        Button('OK').submit(true)
                                    ]
                                ).crossAxisAlignment('center').spacing(8)
                            ).onSubmit('setAppId')
                        ).maxWidth(600),
                        // `<lenra_domain_name>/apps/<lenra_app_uuid>/webhooks/${user.webhookUuid}`
                        // Container(TextField(`{ "userId": "${user.id}", "steamId": "${user.steamId}" }`)).maxWidth(600),
                        user.isInitialized ? Flexible(
                            Container(
                                View("gameList").find(DataApi.collectionName(UserGame), { query: { user: "@me" }, limit: 10, sort: { playtimeForever: -1 } }),
                            ).maxWidth(600).maxHeight(600)
                        ) : Text("We are currently loading your games, please wait for a couple of minutes.").style({ fontSize: 16, fontWeight: 'bold', color: 0xFFaaabad }),

                    ]
                ).direction("vertical")
                    .mainAxisAlignment('spaceAround')
                    .crossAxisAlignment("center")
                    .spacing(16)
            ]
        ).direction("horizontal")
            .mainAxisAlignment("center")
            .crossAxisAlignment("center")
            .fillParent(true)
    ).color(0xFF000000);
}

