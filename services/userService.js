'use strict'

const { default: axios } = require("axios");
const apiServices = require('./api');

module.exports = {
    get(api) {
        return apiServices.executeQuery(api, "users", {
            "_id": "@me"
        }).then((value) => value.data.data[0]);
    },
    getUserGames(api) {
        return apiServices.executeQuery(api, "games", {
            "_refBy": {
                "$contains": ["@me"]
            }
        }).then((value) => value.data);
    },
    update(api, user_id, data) {
        return apiServices.updateDoc(api, "users", { _id: user_id, ...data })
    }
}