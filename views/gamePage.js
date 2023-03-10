'use strict'

const { Flex, Actionable, Icon, Text } = require('@lenra/components');
const gameService = require('../services/gameService');
const userGameService = require('../services/userGameService');

module.exports = async (data, userGame) => {
    let game = data[0];

    return Flex(
        [
            Flex(
                [
                    Actionable(
                        Icon("arrow_back")
                    ).onPressed("navigate", { page: "homePage" }),
                    Flex(
                        [
                            Text(`${game.name}`).style({ fontSize: 24 })
                        ]
                    ).direction("horizontal")
                ]
            ).direction("vertical").mainAxisAlignment("center").crossAxisAlignment("center").spacing(2)
        ]
    ).direction("horizontal").mainAxisAlignment("center").crossAxisAlignment("center").fillParent(true)
}

