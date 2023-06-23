'use strict'

import { View } from '@lenra/components';
import { Game } from '../classes/Game.js';
import { DataApi } from '@lenra/app-server';

export default async function (_data, _props, context) {
    return View('gamePage').data(DataApi.collectionName(Game), { appid: context.pathParams.appid });
}

