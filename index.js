'use strict'

const parse = require('./lib/xml')

module.exports = (options) => {
    return function*(next) {
        const ctx = this
        if (ctx.is('text/xml', 'xml') && /^(POST|PUT|PATCH)$/i.test(ctx.method)) {
            ctx.request.body = yield parse(ctx.req, options);
        }
        yield next
    }
}
