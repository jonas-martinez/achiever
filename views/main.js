'use strict'

const { Stack, View } = require('@lenra/components')

module.exports = async (data, props) => {
  return Stack(
    [
      View("navigator").coll("users").query({ id: "@me" }),
      View("resetDatabaseButton")
    ]
  )
}

