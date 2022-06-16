'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        direction: "horizontal",
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        fillParent: true,
        children: [
            {
                type: "flex",
                direction: "vertical",
                mainAxisAlignment: "center",
                crossAxisAlignment: "center",
                fillParent: true,
                children: [
                    {
                        type: "text",
                        value: "Achiever."
                    },
                ]
            }
        ]
    }
}

