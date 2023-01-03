'use strict'

module.exports = async (data, props) => {
  return {
    type: "view",
    name: "navigator",
    coll: "users",
    query: {
      "id": "@me"
    }
  }
}

