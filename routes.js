const getHomeHandler = require('./handlers/getHomeHandler');

/** @type {import('@hapi/hapi').ServerRoute[]} */
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: getHomeHandler,
    },
];

module.exports = routes;