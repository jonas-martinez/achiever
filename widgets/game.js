'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        fillParent: true,
        children: Array(13).fill({
            type: "flex",
            mainAxisAlignment: "center",
            crossAxisAlignment: "center",
            fillParent: true,
            direction: "vertical",
            children: Array(13).fill(
                {
                    type: "actionable",
                    onPressed: {
                        action: "gameCellClicked",
                        props: {
                            x: 1,
                            y: 1
                        }
                    },
                    child: {
                        type: "container",
                        constraints: {
                            minWidth: 32,
                            minHeight: 32,
                        },
                        child: {
                            type: "text",
                            value: "o"
                        }
                    }
                }

            )
        })
    }
}
