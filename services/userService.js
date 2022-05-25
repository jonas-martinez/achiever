'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, user_id) {
        return axios.get(`${api.url}/app/datastores/User/data/${user_id}`, options(api));
    },
    put(api, user) {
        return axios.put(`${api.url}/app/datastores/User/data/${user._id}`, counter, options(api));
    },
    new(api, params) {
        return axios.post(`${api.url}/app/datastores/User/data`, params, options(api));
    },
    delete(api, user_id) {
        return axios.delete(`${api.url}/app/datastores/User/data/${user_id}`, options(api));
    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastores`, { "name": "User" }, options(api));
    }
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
