const bunyan = require('bunyan'); //install
const createStubLogger = require('bunyan-blackhole'); //install

module.exports = (options) => {
    options = Object.assign({}, options);

    const logger = options.enabled ? bunyan.createLogger({
        name: options.appName,
        level: options.level || 'info',
        serializers: bunyan.stdSerializers
    }) : createStubLogger();

    return logger;
};