'use strict'

module.exports = (data, props) => {
    var userData = data[0];
    console.log("USER DATA");
    console.log(data);
    console.log(userData);

    return {
        type: "text",
        value: JSON.stringify(userData)
    }
}

