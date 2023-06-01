'use strict'

import { View } from '@lenra/components';
import gameService from '../services/gameService';
import userGameService from '../services/userGameService';

export default async function (data, props) {
    let userGame = data[0];

    return View("gamePage").coll("games").query({ appid: userGame.appid }).props(userGame)
}

