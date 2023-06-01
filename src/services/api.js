'use strict'

const { default: axios } = require("axios");

module.exports = {
    get_all(api, coll) {
        return axios.get(`${api.url}/app/colls/${coll}/docs`, options(api)).catch((error) => console.log(error));
    },
    getDoc(api, coll, id) {
        return axios.get(`${api.url}/app/colls/${coll}/docs/${id}`, options(api)).catch((error) => console.log(error));
    },
    createDoc(api, coll, doc) {
        return axios.post(`${api.url}/app/colls/${coll}/docs`, doc, options(api)).catch((error) => console.log(error));
    },
    updateDoc(api, coll, doc) {
        return axios.put(`${api.url}/app/colls/${coll}/docs/${doc._id}`, doc, options(api)).catch((error) => console.log(error));
    },
    deleteDoc(api, coll, doc) {
        return axios.delete(`${api.url}/app/colls/${coll}/docs/${doc._id}`, options(api)).catch((error) => console.log(error));
    },
    executeQuery(api, coll, query) {
        return axios.post(`${api.url}/app/colls/${coll}/docs/find`, query, options(api)).catch((error) => console.log(error));
    },

    createWebhook(api, params) {
        return axios.post(`${api.url}/app/webhooks`, params, options(api)).catch((error) => console.log(error));
    },
    triggerWebhook(api, uuid, props) {
        return axios.post(`${api.url}/webhooks/${uuid}`, props, options(api)).catch((error) => console.log(error));
    }
    // createTransaction
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
