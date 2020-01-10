'use strict';

const { Server } = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
    try {
        const server = new Server({
            host: 'localhost',
            port: 3000,
        });

        server.route(routes);
    
        await server.start();
        console.log(`Server listen on ${server.info.uri}`);
    
    } catch (err) {
        console.log(err);
        process.exit(1);  
    }
};

init();