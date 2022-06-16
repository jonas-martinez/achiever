'use strict'

module.exports = async (data, props) => {
    console.log("GAME LIST");
    console.log(data);

    return {
        type: "text",
        value: "test"
    }
}

