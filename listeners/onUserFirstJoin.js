'use strict'

const userService = require("../services/userService");

module.exports = async (props, event, api) => {
    var userData = await userService.get(api);
    await userService.put(api, userData._id, {
        ...userData,
        nav: "firstTimePage"
    });

    return {};
}