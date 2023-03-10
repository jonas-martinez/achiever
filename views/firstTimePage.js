'use strict'

const { Flex, Text, Container, Form, TextField, Button } = require("@lenra/components")

module.exports = (data, props) => {
    return Flex(
        [
            Flex(
                [
                    Text("Welcome to Achiever."),
                    Text("The Steam Achievement tracking app."),
                    Container(
                        Form(
                            Flex(
                                [
                                    TextField("").name("steamId").style({
                                        decoration: {
                                            label: Text("Please enter your SteamID.")
                                        }
                                    }),
                                    Button("Validate").submit(true)
                                ]
                            ).direction("vertical")
                        ).onSubmit("setSteamID")
                    ).constraints({
                        maxWidth: 250
                    })
                ]
            )
                .direction("vertical")
                .mainAxisAlignment("center")
                .crossAxisAlignment("center")
                .fillParent(true)
        ]
    )
        .direction("horizontal")
        .mainAxisAlignment("center")
        .crossAxisAlignment("center")
        .fillParent(true)
}

