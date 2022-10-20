'use strict'

module.exports = (data, props) => {
    console.log("NAVIGATOR");
    console.log(data);
    switch (data[0].nav) {
        case "firstTimePage":
            return {
                type: "widget",
                name: "firstTimePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        case "homePage":
            return {
                type: "widget",
                name: "homePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        case "gamePage":
            return {
                type: "widget",
                name: "gamePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        default:
            return {
                type: "widget",
                name: "firstTimePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
    }

}
