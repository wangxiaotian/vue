var Webpack = require('webpack'); //	全局安装的webpack没有用，还得本地安装一下

module.exports = {
	entry: ['./entry.js'],
	output: {
		path : __dirname,
		filename : 'bundle.js'
	},
	module : {
		loaders : [{
			test : /\.css$/,
			loader : 'style!css'
		},{
			test : /\.(png|jpg)$/,
			loader : 'url-loader?limit=8192'
		}]
	},
	plugins : [
		new Webpack.BannerPlugin('这里是打包文件头部注释！(天云的test)')
	]
}