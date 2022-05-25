'use strict'

module.exports = (data, props) => {
  return {
    type: "flex",
    direction: "vertical",
    children: [
      {
        type: "text",
        value: "Welcome to Lenra's multiplayer game."
      },
      {
        type: "textfield",
        value: "",
        style: {
          decoration: {
            label: {
              type: "text",
              value: "Please enter a username."
            }
          }
        },
        onChanged: {
          action: "setUsername"
        }
      },
      {
        type: "widget",
        name: "userData",
        query: {
          "$find": {
            "_datastore": "_users",
            "_id": "@me"
          }
        }
      },
      // {
      //   type: "widget",
      //   name: "counters",
      //   query: {
      //     "$find": {
      //       "_datastore": "Counter"
      //     }
      //   }
      // }
    ]
  }
}

