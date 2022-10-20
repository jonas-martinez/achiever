'use strict'

const userService = require("../services/userService");

module.exports = async (props, event, api) => {
    await userService.create(api, {
        _id: "@me",
        nav: "firstTimePage"
    });

    return {};
}