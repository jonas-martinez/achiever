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
        let all = await this.get(api, newUserGame.appid);
        console.log("CREATING NEW USER GAME");
        console.log(all);
        // TODO: Check if user already has game


        // let exists = false;
        // let existingUserGame = {};
        // all.data.map(userGame => {
        //     if (userGame.appid == newUserGame.appid) {
        //         exists = true;
        //         existingUserGame = userGame;
        //     }
        // })
        // if (!exists) {
        //     return await axios.post(`${api.url}/app/datastores/games/data`, { ...newUserGame, "userIds": [userId] }, { headers: { Authorization: `Bearer ${api.token}` } });
        // } else {
        //     if (existingUserGame.userIds.indexOf(userId) === -1) {
        //         existingUserGame.userIds.push(userId);
        //     }
        //     return await this.put(api, existingUserGame);
        // }
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