require('dotenv').load();
const WebSocket = require('ws');
const Handlers = require('./handlers');

const ws = new WebSocket(`ws://${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`, {}, () => {});

ws.on('open', Handlers.openHandler);

ws.on('message', Handlers.messageHandler);

ws.on('error', Handlers.errorHandler);

ws.on('close', Handlers.closeHandler);