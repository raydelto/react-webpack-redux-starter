const path = require('path');
const webpack = require('./webpack.config')('test');

webpack.entry = () => ({});

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [ 'mocha', 'chai' ],
    reporters: [ 'mocha' ],
    files: [
      'test/index.js'
    ],
    preprocessors: {
      'test/index.js': [ 'webpack', 'sourcemap' ]
    },
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    webpack: webpack,
    webpackMiddleware: {
      noInfo: true
    },
    mochaReporter: {
      showDiff: true
    },
    reporters: [ 'progress', 'coverage' ],
    coverageReporter: {
        type: 'lcov'
    }
  });
};
