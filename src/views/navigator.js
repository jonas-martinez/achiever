'use strict'

const { View } = require("@lenra/components");

module.exports = (data, props) => {
    console.log("NAVIGATOR");
    console.log(data);
    switch (data[0].nav) {
        case "firstTimePage":
            return View("firstTimePage").coll("users").query({ id: "@me" })
        case "homePage":
            return View("homePage").coll("users").query({ id: "@me" })
        case "gamePage":
            return View("gamePageContainer").coll("userGames").query({ userId: "@me", appid: data[0].navData.appid })
        default:
            return View("firstTimePage").coll("users").query({ id: "@me" })
    }

}
