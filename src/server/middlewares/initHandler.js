const config = require('../config');
const template = require('art-template');
const path = require('path');
const initHandler = {
    init(app, logger) {
        app.use(async (ctx, next) => {
            ctx.state.__COM_DIR__ = config.COMPONENTS_DIR;
            await next();
        });

        app.context.tmpl = (dir, data) => {
            return template(path.join(__dirname, "../views/", dir + '.html'), data);
        };
    }
};

module.exports = initHandler;