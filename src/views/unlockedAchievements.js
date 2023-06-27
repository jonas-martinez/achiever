'use strict'

import { DataApi } from '@lenra/app-server';
import { Flex, Actionable, Icon, Text, View } from '@lenra/components';
import { UserGame } from '../classes/UserGame.js';

export default async function ([userGame], _props, _context) {
    return Flex(
        userGame.achieved.map((achievement) => {
            return Text(achievement);
        })
    ).direction("vertical").crossAxisAlignment("center").fillParent(true)
}

