'use strict';

const PATHS = require('./paths');
const path = require('path');
const pkg = require('../package.json');
const webpack = require('webpack');
const yargs = require('yargs').argv;

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (conf) => {

	const APP_CONFIG = {
		FB_APP_ID: conf.FB_APP_ID || '1616956521945061',
		RELEASE: new Date().getTime(),
		VERSION: pkg.version
	};

	return {
		entry: [ PATHS.src ],
		module: {
			loaders: [
	      {
	        test: /\.jsx?$/,
	        loader: 'eslint-loader',
	        include: [ PATHS.src ],
					enforce: 'pre'
	      },
				{
					test: /.(js|jsx)$/,
					include: [ PATHS.src ],
					loader: 'babel-loader'
				},
				{
					test: /\.json$/,
					exclude: [ PATHS.translations ],
					loader: 'json-loader'
				},
				{
					test: /\.json$/,
					include: [ PATHS.translations ],
					loader: 'file-loader?name=[path][name].[ext]'
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
			modules: [ PATHS.src, PATHS.node_modules, PATHS.translations ]
		},
		externals: {
			'APP_CONFIG': JSON.stringify(APP_CONFIG)
		},
		plugins: [
			new webpack.NamedModulesPlugin(),
			new HtmlWebpackPlugin({
				template: 'node_modules/html-webpack-template/index.ejs',
				inject: false,
				env: process.env,
	      appMountId: 'app',
				favicon: './favicon.ico'
			})
		]
	}
}
