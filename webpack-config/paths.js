const path = require('path');

const dir = path.dirname(__dirname);

module.exports = {
  src: path.join(dir, 'src'),
  build: path.join(dir, 'build'),
  templates: path.join(dir, 'templates'),
	node_modules: path.join(dir, 'node_modules'),
	static: path.join(dir, 'static'),
	test: path.join(dir, 'test')
};
