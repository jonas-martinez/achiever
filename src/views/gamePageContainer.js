'use strict'

import { View } from '@lenra/components';

export default async function (data, props) {
    let userGame = data[0];

    return View("gamePage").coll("games").query({ appid: userGame.appid }).props(userGame)
}

