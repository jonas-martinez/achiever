'use strict'

const apiService = require("../services/api");
const userService = require("../services/userService");


module.exports = async (props, event, api) => {
    const colls = ["users", "games", "userGames"];
    colls.forEach(async (coll) => {
        await (await apiService.executeQuery(api, coll, {})).data.forEach((doc) => {
            apiService.deleteDoc(api, coll, doc)
        });
    });

    await userService.create(api, {
        id: "@me",
        nav: "firstTimePage"
    });

    return {};
}
