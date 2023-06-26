'use strict'

import { View } from '@lenra/components';
import { Game } from '../classes/Game.js';
import { DataApi } from '@lenra/app-server';

export default async function (_data, props, _context) {
    return View('gamePage').data(DataApi.collectionName(Game), { appid: props.context.pathParams.appid });
}

