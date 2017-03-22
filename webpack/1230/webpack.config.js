var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: './entry.js',
	output: {
		path: path.resolve(__dirname,'./dist/'),
		filename: 'app.js'
	},
	module: {
		loaders: [
		{test: /\.css$/,loader: 'style!css'}
		]
	},
	plugins: [
		new webpack.BannerPlugin('This file is created by zhaoda')
	]
}