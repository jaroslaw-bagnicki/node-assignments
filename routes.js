const getHomeHandler = require('./handlers/getHomeHandler');

/** @type {import('@hapi/hapi').ServerRoute[]} */
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: getHomeHandler,
    },
    {
        method: 'GET',
        path: '/crash',
        handler: () => { 
            throw Error('Ups...'); 
        },
    },
];

module.exports = routes;