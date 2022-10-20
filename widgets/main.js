'use strict'

module.exports = async (data, props) => {
  return {
    type: "widget",
    name: "navigator",
    coll: "users",
    query: {
      "id": "@me"
    }
  }
}

