'use strict'

const gameService = require('../services/gameService');
const userGameService = require('../services/userGameService');

module.exports = async (data, userGame) => {
    let game = data[0];

    return {
        type: "flex",
        direction: "horizontal",
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        fillParent: true,
        children: [
            {
                type: "flex",
                direction: "vertical",
                mainAxisAlignment: "center",
                crossAxisAlignment: "center",
                spacing: 2,
                children: [
                    {
                        type: "actionable",
                        onPressed: {
                            action: "navigate",
                            props: {
                                page: "homePage"
                            }
                        },
                        child: {
                            type: "icon",
                            value: "arrow_back"
                        }
                    },
                    {
                        type: "flex",
                        direction: "horizontal",
                        children: [
                            {
                                type: "text",
                                style: {
                                    fontSize: 24
                                },
                                value: `${game.name}`
                            }
                        ]
                    },
                ]
            },
        ]
    }
}

