'use strict'

const { Actionable, Container, Text } = require('@lenra/components')

module.exports = async (data, props) => {
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


