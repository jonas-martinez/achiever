'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, gameId) {
        return axios.post(
            `${api.url}/app/query`,
            {
                "$find": {
                    "_datastore": "games",
                    "appid": gameId
                }
            },
            headers(api)
        ).then((value) => value.data.data[0]);
    },
    get_all(api) {
        return axios.get(`${api.url}/app/datastores/games/data`, { headers: { Authorization: `Bearer ${api.token}` } }
        ).then((value) => {
            return value.data
        });
    },
    put(api, game) {
        return axios.put(`${api.url}/app/datastores/games/data/${game._id}`, game, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    async new(api, newGame, userId) {
        let all = await this.get_all(api)
        let exists = false;
        let existingGame = {};
        all.data.map(game => {
            if (game.appid == newGame.appid) {
                exists = true;
                existingGame = game;
            }
        })
        if (!exists) {
            return await axios.post(`${api.url}/app/datastores/games/data`, { ...newGame, "userIds": [userId] }, { headers: { Authorization: `Bearer ${api.token}` } });
        } else {
            if (existingGame.userIds.indexOf(userId) === -1) {
                existingGame.userIds.push(userId);
            }
            return await this.put(api, existingGame);
        }
    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastores`, { "name": "games" }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
}

function headers(api) {
    return { headers: { Authorization: `Bearer ${api.token}` } };
}