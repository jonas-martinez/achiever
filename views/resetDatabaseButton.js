'use strict'

module.exports = async (data, props) => {
    return {
        type: "actionable",
        onPressed: {
            action: "resetDatabase"
        },
        child: {
            type: "container",
            decoration: {
                color: 0xFFFF0000,
            },
            constraints: {
                minWidth: 5,
                minHeight: 5,
            },
            child: {
                type: "text",
                value: ""
            }
        }
    }
}


