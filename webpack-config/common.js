'use strict';

const PATHS = require('./paths');
const path = require('path');
const pkg = require('../package.json')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const appConfig = {
	AWS_ACC_ID: '478949217665',
	WEB_ID_ROLE_NAME: 'WEBFED_S3_READ',
	REGION_ID: 'us-east-1',
	FB_APP_ID: '1616956521945061'
};

module.exports = {
	entry: {
		app: PATHS.src
	},
	module: {
		loaders: [
			{
				test: /.(js|jsx)$/,
				include: [ PATHS.src ],
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015', 'stage-0']
				}
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.jpe?g$|\.gif$|\.png$/,
				loader: 'file-loader?name=/images/[name].[hash].[ext]'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=/fonts/[name].[hash].[ext]'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=/fonts/[name].[hash].[ext]'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
		modules: [ PATHS.src, PATHS.node_modules ]
	},
	externals: {
		'APP_CONFIG': JSON.stringify(appConfig)
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'node_modules/html-webpack-template/index.ejs',
			inject: false,
			env: process.env,
      appMountId: 'app',
			favicon: './favicon.ico'
		})
	]
}
