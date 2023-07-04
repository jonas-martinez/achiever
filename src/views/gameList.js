'use strict'

import { DataApi } from "@lenra/app-server";
import { Flex, View } from "@lenra/components";
import { Game } from "../classes/Game.js";

export default async function (userGames, props) {
    userGames.sort(function (a, b) {
        return b.playtimeForever - a.playtimeForever;
    });
    userGames = paginate(userGames, 10, 1)

    return Flex(userGames.map(function (userGame) {
        return View("gameCard").props(userGame).data(DataApi.collectionName(Game), { appid: userGame.appid });
    })).direction("vertical").scroll(true).spacing(8)
}

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
