'use strict'

import userService from "../services/userService";

export default async function (props, event, api) {
    await userService.create(api, {
        id: "@me",
        nav: "firstTimePage"
    });

    return {};
}