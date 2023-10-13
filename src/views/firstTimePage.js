'use strict'

import { Flex, Text, Container, Form, TextField, Button, Actionable } from "@lenra/app";

export default function (data, props) {
    return Container(
        Flex(
            [
                Flex(
                    [
                        Flex([
                            Text("Welcome to Achiever.").style({ fontSize: 24, fontWeight: 'bold', color: 0xFFaaabad }),
                            Text("The Steam Achievement tracking app.").style({ fontSize: 24, fontWeight: 'bold', color: 0xFFaaabad }),
                        ]).direction('vertical').crossAxisAlignment('center'),
                        Container(
                            Form(
                                Flex(
                                    [
                                        TextField("").name("steamId").style({
                                            decoration: {
                                                label: Text("Please enter your SteamID."),
                                                labelStyle: { color: 0xFF000000 },
                                                fillColor: 0xFFaaabad,
                                                filled: true,
                                            }
                                        }),
                                        Actionable(
                                            Container(
                                                Text('OK').style({ fontSize: 24, fontWeight: 'bold', color: 0xFFaaabad })
                                            ).border(
                                                {
                                                    "top": { "width": 3, "color": 0xFFaaabad },
                                                    "left": { "width": 3, "color": 0xFFaaabad },
                                                    "bottom": { "width": 3, "color": 0xFFaaabad },
                                                    "right": { "width": 3, "color": 0xFFaaabad },
                                                }
                                            ).padding({
                                                "top": 8,
                                                "left": 8,
                                                "bottom": 8,
                                                "right": 8
                                            },).borderRadius({
                                                "topLeft": {
                                                    "x": 10,
                                                    "y": 10,
                                                },
                                                "topRight": {
                                                    "x": 10,
                                                    "y": 10,
                                                },
                                                "bottomRight": {
                                                    "x": 10,
                                                    "y": 10,
                                                },
                                                "bottomLeft": {
                                                    "x": 10,
                                                    "y": 10,
                                                },
                                            })
                                        ).submit(true),
                                    ]
                                ).direction("vertical").spacing(16).crossAxisAlignment("center")
                            ).onSubmit("setSteamID")
                        ).constraints({
                            maxWidth: 250
                        })
                    ]
                )
                    .direction("vertical")
                    .mainAxisAlignment("center")
                    .crossAxisAlignment("center")
                    .fillParent(true).spacing(16)
            ]
        )
            .direction("horizontal")
            .mainAxisAlignment("center")
            .crossAxisAlignment("center")
            .fillParent(true)
    ).decoration({ color: 0xFF000000 });
}

