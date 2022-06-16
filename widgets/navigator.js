'use strict'

module.exports = (data, props) => {
    switch (data[0].nav) {
        case "firstTimePage":
            return {
                type: "widget",
                name: "firstTimePage",
                query: {
                    "$find": {
                        "_datastore": "_users",
                        "_id": "@me"
                    }
                }
            }
        case "homePage":
            return {
                type: "widget",
                name: "homePage",
                query: {
                    "$find": {
                        "_datastore": "_users",
                        "_id": "@me"
                    }
                }
            }
    }

}
