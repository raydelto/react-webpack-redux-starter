const customConfig = require('../webpack.config')('development');
const merge = require('webpack-merge');
const PATHS = require('../webpack-config/paths');

module.exports = (config, type) => {
	customConfig.entry = {};
	customConfig.plugins = [];
	customConfig.devServer = null;
	customConfig.resolve.root = PATHS.src;

	const result = merge(config, customConfig);

	return result;
};
