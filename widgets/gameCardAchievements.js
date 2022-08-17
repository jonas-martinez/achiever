'use strict'

module.exports = async (data, props) => {
    return {
        type: "text",
        value: `${data[0].achieved.length} achievements`
    }
}

