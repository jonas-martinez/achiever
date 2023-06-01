'use strict'

import { Text } from "@lenra/components"

export default async function (data, props) {
    return Text(`${data[0] != undefined ? data[0].achieved.length : 0} achievements`)
}

