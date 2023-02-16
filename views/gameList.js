'use strict'

const { Flex, View } = require("@lenra/components");

module.exports = async (data, props) => {
    data.sort(function (a, b) {
        return b.playtime_forever - a.playtime_forever;
    });
    data = paginate(data, 10, 1)

    return Flex(...data.map(function (game) {
        return View("gameCard").props(game).coll("games").query({ appid: game.appid })
    })).direction("vertical").scroll(true).spacing(2)
}

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
