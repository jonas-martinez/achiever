'use strict'

const gameService = require('../services/gameService');
const userGameService = require('../services/userGameService');

module.exports = async (data, props) => {
    console.log("GAME PAGE");

    let gameId = data[0].navData.gameId;
    let api = data[0].navData.api;
    // TODO: Request game info
    let game = await gameService.get(api, gameId);
    // TODO: Request player achievements on this game
    let userGame = await userGameService.get(api, gameId);

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
                                value: game.name
                            }
                        ]
                    },
                ]
            },
        ]
    }
}

