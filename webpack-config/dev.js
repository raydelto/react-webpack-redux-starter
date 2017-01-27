'use strict';

module.exports = {
	performance: {
		hints: false
	},
	module: {
		loaders: [
			{
				test: /\.(css|scss)$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		https: true
	}
}
