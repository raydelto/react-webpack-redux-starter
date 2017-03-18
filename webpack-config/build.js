'use strict';

const webpack = require('webpack');
const pkg = require('../package.json');
const path = require('path');
const PATHS = require('./paths');

const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (conf) => ({
  output: {
    path: './build',
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.(scss|css|sass)?$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader']
        })
      }
    ]
  },
	devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanPlugin([PATHS.build], {
      root: process.cwd() // because Windows
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].[hash].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module, count) => {
        const resource = module.resource;
        return resource && resource.indexOf(PATHS.node_modules) >= 0;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      names: ['vendor', 'manifest']
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    })
  ]
});
