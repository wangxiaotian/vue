var path = require('path');
module.exports = {
	entry: './src/main',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'dist')
	},
	devServer: {
		port: 8000
	}
}