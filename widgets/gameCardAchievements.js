'use strict'

module.exports = async (data, props) => {
    return {
        type: "text",
        value: `${data[0] != undefined ? data[0].achieved.length : 0} achievements`
    }
}

