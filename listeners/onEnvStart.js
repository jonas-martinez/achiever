'use strict'

const gameService = require('../services/gameService');

module.exports = async (props, event, api) => {
    console.log("On Env Start");
    console.log(props);
    console.log(event);
    console.log(api);
    // TODO: Create "games" datastore
    await gameService.createDatastore(api);

    return {};
}