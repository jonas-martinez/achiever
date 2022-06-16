'use strict'

const { default: axios } = require("axios");

module.exports = {
    get_all(api) {
        return axios.get(`${api.url}/app/datastores/games/data`, { headers: { Authorization: `Bearer ${api.token}` } }
        ).then((value) => {
            return value.data
        });
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
            return await axios.post(`${api.url}/app/datastores/games/data`, { ...game, "_refBy": [userId] }, { headers: { Authorization: `Bearer ${api.token}` } });
        } else {
            if (existingGame._refBy.indexOf(userId) === -1) {
                existingGame._refBy.push(userId);
            }
            return await put(api, existingGame);
        }
    },
    put(api, game) {
        return axios.put(`${api.url}/app/datastores/games/data/${game._id}`, game, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastores`, { "name": "games" }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
}

function headers(api) {
    return { headers: { Authorization: `Bearer ${api.token}` } };
}