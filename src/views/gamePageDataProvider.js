'use strict'

import { Flex, Actionable, Icon, Text, View } from '@lenra/components';
import { Game } from '../classes/Game.js';
import { DataApi } from '@lenra/app-server';

export default async function (data, userGame, context) {
    return View('gamePage').data(DataApi.collectionName(Game), { appid: context.pathParams.appid });
}

