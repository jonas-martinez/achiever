'use strict'

const steamService = require("../services/steamService");

module.exports = async (data, props) => {
    let userGamesInfo = await steamService.getUserGames("", "", "76561197973393048");
    console.log(Object.keys(userGamesInfo));
    // console.log(userGamesInfo.response.games);
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
                fillParent: true,
                children: [
                    {
                        type: "text",
                        value: "Achiever."
                    },
                ]
            }
        ]
    }
}

