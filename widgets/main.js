'use strict'

module.exports = async (data, props) => {
  return {
    type: "widget",
    name: "navigator",
    query: {
      "$find": {
        "_datastore": "_users",
        "_id": "@me"
      }
    }
  }
}

