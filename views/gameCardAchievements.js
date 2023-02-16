'use strict'

const { Text } = require("@lenra/components")

module.exports = async (data, props) => {
    return Text(`${data[0] != undefined ? data[0].achieved.length : 0} achievements`)
}

