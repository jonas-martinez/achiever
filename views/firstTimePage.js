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
                            type: "form",
                            onSubmit: {
                                action: "setSteamID"
                            },
                            child: {
                                type: "flex",
                                direction: "vertical",
                                children: [
                                    {
                                        type: "textfield",
                                        value: "",
                                        name: "steamID",
                                        style: {
                                            decoration: {
                                                label: {
                                                    type: "text",
                                                    value: "Please enter your SteamID."
                                                }
                                            }
                                        },
                                    },
                                    {
                                        type: "button",
                                        text: "Validate",
                                        submit: true,
                                    }
                                ]
                            }
                        },
                    },

                ]
            }
        ]
    }
}

