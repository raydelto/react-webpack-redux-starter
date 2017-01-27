const PATHS = require('./paths');

module.exports = {
  externals: {
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
          enforce: 'post',
          test: /.(js|jsx)$/,
          include: [ PATHS.src, PATHS.api ],
          loader: 'isparta-loader'
      }
    ],
		loaders: [
			{
				test: /\.(css|scss)$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
  }
}
