'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        fillParent: true,
        children: Array(13).fill(0).map((_, x) => {
            return {
                type: "flex",
                mainAxisAlignment: "center",
                crossAxisAlignment: "center",
                fillParent: true,
                direction: "vertical",
                children: Array(13).fill(0).map((_, y) => {
                    return {
                        type: "actionable",
                        onPressed: {
                            action: "onGameCellClick",
                            props: {
                                x: x,
                                y: y
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
                                textAlign: "center",
                                value: "o"
                            }
                        }
                    }
                }

                )
            }
        })
    }
}
