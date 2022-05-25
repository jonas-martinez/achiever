'use strict'

const counterService = require("../services/counterService");
const userService = require("../services/userService");


module.exports = (props, event, api) => {
    userService.createDatastore(api).catch((e => {  }));
    return counterService.createDatastore(api).catch((e => { }));
}