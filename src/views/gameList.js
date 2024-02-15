'use strict'

import { DataApi } from "@lenra/app";
import { Flex, View } from "@lenra/app";
import { Game } from "../classes/Game.js";

export default async function (userGames, props) {
    userGames.sort(function (a, b) {
        return b.playtimeForever - a.playtimeForever;
    });

    return Flex(userGames.map(function (userGame) {
        return View("gameCard").props(userGame).find(DataApi.collectionName(Game), { appid: userGame.appid });
    })).direction("vertical").scroll(true).spacing(8)
}
