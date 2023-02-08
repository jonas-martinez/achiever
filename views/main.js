'use strict'

module.exports = async (data, props) => {
  return {
    type: "stack",
    children: [
      {
        type: "view",
        name: "navigator",
        coll: "users",
        query: {
          "id": "@me"
        }
      },
      {
        type: "view",
        name: "resetDatabaseButton",
      }
    ]
  }
}

