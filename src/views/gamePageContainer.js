'use strict'

const { View } = require('@lenra/components');
const gameService = require('../services/gameService');
const userGameService = require('../services/userGameService');

module.exports = async (data, props) => {
    let userGame = data[0];

    return View("gamePage").coll("games").query({ appid: userGame.appid }).props(userGame)
}

