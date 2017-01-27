'use strict';

const merge = require('webpack-merge');

module.exports = (env) => {
	process.env.BABEL_ENV = env;

	const common = require('./webpack-config/common');

	if(env === 'development' || !env) {
		return merge(common, require('./webpack-config/dev'));
	}

	if(env === 'test') {
		return merge(common, require('./webpack-config/test'));
	}

	if(env === 'stats') {
		return merge(common, require('./webpack-config/build'), require('./webpack-config/analyze'));
	}

	return merge(common, require('./webpack-config/build'));
};
