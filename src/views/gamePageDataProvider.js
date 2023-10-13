'use strict'

import { View } from '@lenra/app';
import { Game } from '../classes/Game.js';
import { DataApi } from '@lenra/app';

export default async function (_data, props, _context) {
    return View('gamePage').find(DataApi.collectionName(Game), { appid: props.context.pathParams.appid });
}

