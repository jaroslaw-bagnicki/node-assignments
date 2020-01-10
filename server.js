
'use strict';

const { Server } = require('@hapi/hapi');
const routes = require('./routes');

const server = new Server({
    host: 'localhost',
    port: 3000,
});

server.route(routes);

exports.init = async() => {
    await server.initialize();
    return server;
};

exports.start = async() => {
    await server.start();
    console.log(`Server listen on ${server.info.uri}`);
    return server;
};
