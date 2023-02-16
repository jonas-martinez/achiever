'use strict'

const { Flex, Text, Button, Flexible, Container, View } = require('@lenra/components')

module.exports = async (data, props) => {
    return Flex(
        Flex(
            Text("Achiever").style({ fontSize: 24 }),
            Button("DEBUG BUTTON").onPressed("debug"),
            Flexible(
                Container(
                    View("gameList").coll("userGames").query({ userId: "@me" })
                ).maxWidth(600).maxHeight(600)
            )
        ).direction("vertical")
            .mainAxisAlignment("center")
            .crossAxisAlignment("center")
            .spacing(2)
    ).direction("horizontal")
        .mainAxisAlignment("center")
        .crossAxisAlignment("center")
        .fillParent(true);
}

