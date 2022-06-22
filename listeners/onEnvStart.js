'use strict'

const gameService = require('../services/gameService');
const userGameService = require('../services/userGameService');

module.exports = async (props, event, api) => {
    console.log("On Env Start");
    console.log(props);
    console.log(event);
    console.log(api);
    
    await gameService.createDatastore(api);
    await userGameService.createDatastore(api);

    return {};
}