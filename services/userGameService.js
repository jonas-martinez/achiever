'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, gameId) {
        return axios.post(
            `${api.url}/app/query`,
            {
                "$find": {
                    "_datastore": "userGames",
                    "_id": "@me",
                    "appid": gameId
                }
            },
            headers(api)
        ).then((value) => value.data.data[0]);
    },
    get_all(api) {
        return axios.post(
            `${api.url}/app/query`,
            {
                "$find": {
                    "_datastore": "userGames",
                    "_id": "@me"
                }
            },
            headers(api)
        ).then((value) => value.data);
    },
    async new(api, newUserGame, userId) {
        let userGame = await this.get(api, newUserGame.appid);
        if(userGame === undefined) {
            return await axios.post(`${api.url}/app/datastores/userGames/data`, { ...newUserGame, "userId": userId }, { headers: { Authorization: `Bearer ${api.token}` } });
        } else {
            // TODO: Put user game 
            // return await this.put(api, userId, )
        }
    },
    put(api, userId, data) {
        return axios.put(`${api.url}/app/datastores/userGames/data/${userId}`, data, headers(api));
    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastores`, { "name": "userGames" }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
}

function headers(api) {
    return { headers: { Authorization: `Bearer ${api.token}` } };
}