'use strict'

const userService = require("../services/userService");

module.exports = async (counter, event, api) => {
    // counter.value -= 1;
    console.log("SET USERNAME");
    console.log(counter);
    console.log(event);
    console.log(api);
    console.log((await userService.get(api)).data.data[0]);
    return {};
    // return counterService.put(api, counter);
}