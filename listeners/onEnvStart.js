'use strict'

const counterService = require("../services/counterService");
const userService = require("../services/userService");


module.exports = (props, event, api) => {
    // Create user datastore to store user infos (username, ...)
    userService.createDatastore(api).catch((e => {  }));
    // Create game datastore to store game infos
    // TODO gameService

    return counterService.createDatastore(api).catch((e => { }));
}