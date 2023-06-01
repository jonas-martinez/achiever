'use strict'

import { Stack, View } from '@lenra/components'

export default async function (data, props) {
  return Stack(
    [
      View("navigator").coll("users").query({ id: "@me" }),
      View("resetDatabaseButton")
    ]
  )
}

