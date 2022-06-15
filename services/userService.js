'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api) {
        return axios.post(
            `${api.url}/app/query`,
            {
                "$find": {
                    "_datastore": "_users",
                    "_id": "@me"
                }
            },
            headers(api)
        ).then((value) => value.data.data[0]);
    },
    put(api, user_id, data) {
        return axios.put(`${api.url}/app/datastores/_users/data/${user_id}`, data, headers(api));
    }
}

function headers(api) {
    return { headers: { Authorization: `Bearer ${api.token}` } };
}