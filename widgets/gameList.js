'use strict'

module.exports = async (data, props) => {
    data.sort(function (a, b) {
        return b.playtime_forever - a.playtime_forever;
    });
    return {
        type: "flex",
        direction: "vertical",
        spacing: 2,
        children: data.map(function (game) {
            return {
                type: "widget",
                name: "gameCard",
                props: game
            }
        })
    }
}

