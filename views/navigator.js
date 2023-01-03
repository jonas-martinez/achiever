'use strict'

module.exports = (data, props) => {
    console.log("NAVIGATOR");
    console.log(data);
    switch (data[0].nav) {
        case "firstTimePage":
            return {
                type: "view",
                name: "firstTimePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        case "homePage":
            return {
                type: "view",
                name: "homePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        case "gamePage":
            return {
                type: "view",
                name: "gamePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        default:
            return {
                type: "view",
                name: "firstTimePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
    }

}
