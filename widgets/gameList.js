'use strict'

module.exports = async (data, props) => {
    console.log("GAME LIST");
    console.log(data);

    return {
        type: "flex",
        direction: "vertical",
        spacing: 2,
        children: data.map(function(game) {
            console.log("GAME" + game.name);
            return {
                type: "widget",
                name: "gameCard",
                props: game
            }
        })
    }
}

