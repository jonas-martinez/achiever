'use strict'

const { default: axios } = require("axios");
const apiServices = require('./api');

module.exports = {
    get(api) {
        return apiServices.executeQuery(api, "users", {
            "id": "@me"
        }).then((value) => value.data[0]);
    },
    create(api, userData) {
        return apiServices.createDoc(api, "users", userData);
    },
    getUserGames(api) {
        return apiServices.executeQuery(api, "games", {
            "_refBy": {
                "$contains": ["@me"]
            }
        }).then((value) => value.data);
    },
    async update(api, data) {
        let user = await this.get(api);
        return apiServices.updateDoc(api, "users", { "_id": user._id, ...data })
    }
}