'use strict'

module.exports = async (data, props) => {
    data.sort(function (a, b) {
        return b.playtime_forever - a.playtime_forever;
    });
    data = paginate(data, 10, 1)
    return {
        type: "flex",
        direction: "vertical",
        scroll: true,
        spacing: 2,
        children: data.map(function (game) {
            return {
                type: "view",
                name: "gameCard",
                props: game,
                coll: "games",
                query: {
                    appid: game.appid
                },
            }
        })
    }
}

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
