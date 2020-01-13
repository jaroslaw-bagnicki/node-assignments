/** @type {import('@hapi/hapi').Lifecycle.Method} */
module.exports = function getHomeHandler(req, h) {
    return h.response({
        foo: 'bar',
        baz: 'yolo',
    });
};
