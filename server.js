// Copyright (c) Alex Ellis 2021. All rights reserved.
// Copyright (c) OpenFaaS Author(s) 2021. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

"use strict"

import express from 'express';
import { writeFileSync } from 'fs';
import morgan from 'morgan';
const app = express();

import manifestHandler from './index.js';
const defaultMaxSize = '50mb'; // body-parser default

const rawLimit = process.env.MAX_RAW_SIZE || defaultMaxSize;
const jsonLimit = process.env.MAX_JSON_SIZE || defaultMaxSize;

let listenerHandlers = null;
let viewHandlers = null;
let manifest = null;

const RESOURCE_TYPE = "resource";
const LISTENER_TYPE = "listener";
const WIDGET_TYPE = "view";
const MANIFEST_TYPE = "manifest";

app.disable('x-powered-by');

app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        'type:', get_req_type(req),
        tokens.status(req, res),
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
}, {
    skip: function (req, res) { return res.statusCode < 400 }
}))

app.use(function addDefaultContentType(req, res, next) {
    // When no content-type is given, the body element is set to
    // nil, and has been a source of contention for new users.

    if (!req.headers['content-type']) {
        req.headers['content-type'] = "text/plain"
    }
    next()
})

if (process.env.RAW_BODY === 'true') {
    app.use(express.raw({ type: '*/*', limit: rawLimit }))
} else {
    app.use(express.text({ type: "text/*" }));
    app.use(express.json({ limit: jsonLimit }));
    app.use(express.urlencoded({ extended: true }));
}

const get_req_type = (req) => {
    if (req.method !== "POST") return "none";
    if (req.body.resource) {
        return RESOURCE_TYPE;
    } else if (req.body.action) {
        return LISTENER_TYPE;
    } else if (req.body.view) {
        return WIDGET_TYPE;
    } else {
        return MANIFEST_TYPE;
    }
}

const middleware = async (req, res) => {
    switch (get_req_type(req)) {
        case RESOURCE_TYPE:
            handleAppResource(req, res);
            break;

        case LISTENER_TYPE:
            handleAppListener(req, res);
            break;

        case WIDGET_TYPE:
            handleAppView(req, res);
            break;

        case MANIFEST_TYPE:
            handleAppManifest(req, res);
            break;

        default:
            throw "Middleware type unknown.";

    }
};

function handleAppResource(req, res) {
    const resources_path = "./resources/";

    // Checking file extensions according to which ones Flutter can handle
    if (req.body.resource.match(/.*(\.jpeg|\.jpg|\.png|\.gif|\.webp|\.bmp|\.wbmp)$/)) {
        res.sendFile(req.body.resource, { root: resources_path });
    } else {
        res.sendStatus(404);
    }
}

async function initManifest() {
    if (manifest == null) {
        let tempManifest = await manifestHandler();
        viewHandlers = tempManifest.views;
        listenerHandlers = tempManifest.listeners || {};
        viewHandlers = tempManifest.views;
        listenerHandlers = tempManifest.listeners || {};
        manifest = {
            views: Object.keys(viewHandlers),
            listeners: Object.keys(listenerHandlers),
            rootView: tempManifest.rootView
        };
    }
    return Promise.resolve(manifest);
}

async function handleAppManifest(req, res) {


    return initManifest().then(manifest => {

        res.status(200).json({ manifest: manifest });
    })
        .catch(err => {
            const err_string = err.toString ? err.toString() : err;
            console.error("handleAppManifest:", err_string);
            res.status(500).send(err_string);
        });
}

async function handleAppView(req, res) {
    let { view, data, props } = req.body;

    if (Object.keys(viewHandlers).includes(view)) {
        let possibleFutureRes = viewHandlers[view](data, props)

        return Promise.resolve(possibleFutureRes)
            .then(view => {

                res.status(200).json({ view: view });
            })
            .catch(err => {
                const err_string = err.toString ? err.toString() : err;
                console.error('handleAppView:', err_string);
                res.status(500).send(err_string);
            });
    } else {
        let msg = `No view found for name ${view} in app manifest.`;
        console.error(msg);
        res.status(404).send(msg);
    }

}

/**
 * This is the main entry point for the OpenFaaS function.
 *
 * This function will call the index.js file of the application
 * when the page change.
 * If an event is triggered, the matched event function provided by the app is triggered.
 * The event can be a listener or a view update.
 */
async function handleAppListener(req, res) {
    let { action, props, event, api } = req.body;
    /*
        listeners file need to exactly math with action name
    */
    if (Object.keys(listenerHandlers).includes(action)) {
        let possibleFutureRes = listenerHandlers[action](props, event, api);

        return Promise.resolve(possibleFutureRes)
            .then(() => {
                res.status(200).send();
            })
            .catch(err => {
                const err_string = err.toString ? err.toString() : err;
                console.error('handleAppAction:', err_string);
                res.status(500).send(err_string);
            });
    } else {
        console.error(`No listener found for action ${action} in app manifest.`);
        res.status(404).send(`No listener found for action ${action} in app manifest.`);
    }
}

//middleware to catch ressource
app.post('/*', middleware);

const port = process.env.http_port || 3000;

initManifest().then(() => {
    app.listen(port, () => {
        writeFileSync("/tmp/.lock", "\n");
        console.log(`App listening on port: ${port}`)
    });
}).catch(err => {
    console.error(err);
});