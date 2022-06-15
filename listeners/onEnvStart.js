'use strict'

const counterService = require("../services/counterService");
const userService = require("../services/userService");


module.exports = (props, event, api) => {
    // Create user datastore to store user infos (username, ...)
    userService.createDatastore(api).catch((e => {  }));
    // Create game datastore to store game infos
    // TODO gameService

    console.log("On Env Start");
    console.log(props);
    console.log(event);
    console.log(api);

    return counterService.createDatastore(api).catch((e => { }));
}