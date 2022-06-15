'use strict'

const counterService = require("../services/counterService")


module.exports = (props, event, api) => {
    console.log("On User First Join");
    console.log(props);
    console.log(event);
    console.log(api);
    return counterService.new(api);
}