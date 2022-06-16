'use strict'

const userService = require("../services/userService");


module.exports = async (props, event, api) => {
    var userData = await userService.get(api);
    switch (props.action) {
        case "firstTimePage":
            return navigateTo(api, userData._id, userData, "firstTimePage");
        case "homePage":
            return navigateTo(api, userData._id, userData, "homePage");
    }
}

function navigateTo(api, userId, userData, page) {
    return userService.put(api, userId, {
        ...userData,
        nav: page
    });
}