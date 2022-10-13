'use strict'

const { default: axios } = require("axios");
const apiServices = require('./api');

module.exports = {
    get(api, gameId) {
        return apiServices.executeQuery(api, "userGames", {
            "_id": "@me",
            "appid": gameId
        }).then((value) => value.data.data[0]);
    },
    get_all(api) {
        return apiServices.executeQuery(api, "userGames", {
            "_id": "@me"
        }).then((value) => value.data);
    },
    async new(api, userId, newUserGame, callback) {
        let userGame = await this.get(api, newUserGame.appid);
        if (userGame === undefined) {
            return await axios.post(`${api.url}/app/datastores/userGames/data`, { ...newUserGame, "userId": userId }, { headers: { Authorization: `Bearer ${api.token}` } });
        } else {
            return await callback();
        }
    },
    put(api, userGameId, data) {
        return axios.put(`${api.url}/app/datastores/userGames/data/${userGameId}`, data, headers(api));
    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastores`, { "name": "userGames" }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
};