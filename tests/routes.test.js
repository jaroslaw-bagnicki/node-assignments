const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../server');

describe('GET /', () => {
    /** @type {import('@hapi/hapi').Server} */
    let server;

    beforeEach(async () => {
        server = await init();
    });

    afterEach(async () => {
        await server.stop();
    });

    it('should responds with status 200', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/',
        });
        expect(res.statusCode).equal(200);
    });

    it('should responds with \'content-type: application/json\' header', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/',
        });

        expect(res.headers['content-type']).exist().and.includes('application/json');
    });

    it('should responds with json of shape { foo: string, baz: string }', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/',
        });

        expect(res.payload).exist();

        const payload = JSON.parse(res.payload);

        expect(payload).be.object();
        expect(Object.keys(payload)).only.includes(['foo', 'baz']);
        expect(payload.foo).be.string();
    });
});