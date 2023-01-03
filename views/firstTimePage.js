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
                        value: "Welcome to Achiever."
                    },
                    {
                        type: "text",
                        value: "The Steam Achievement tracking app."
                    },
                    {
                        type: "container",
                        constraints: {
                            maxWidth: 250,
                        },
                        child: {
                            type: "textfield",
                            value: "",
                            style: {
                                decoration: {
                                    label: {
                                        type: "text",
                                        value: "Please enter your SteamID."
                                    }
                                }
                            },
                            onChanged: {
                                action: "setSteamID"
                            },
                        },
                    },
                    {
                        type: "button",
                        text: "Validate",
                        onPressed: {
                            action: "navigate",
                            props: {
                                page: "homePage"
                            }
                        }
                    }
                ]
            }
        ]
    }
}

