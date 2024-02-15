'use strict'

import { Actionable, Container, Text } from '@lenra/app'

export default async function (data, props) {
    return Actionable(
        Container(
            Text("")
        ).decoration({
            color: 0xFFFF0000
        }).constraints({
            minWidth: 5,
            minHeight: 5,
        })
    ).onPressed("resetDatabase")
}


