var path = require('path');
console.log("_do");
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.join(__dirname, './dist/'),
		filename: '[name].js',
		publicPath: '/dist/'
	},
	devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
	module: {
		loaders: [
			{test: /\.js$/,exclude: /node_modules/,loader: 'babel'},
			{test:/\.vue$/,loader: 'vue'},
			{test: /\.css$/,loader: 'style!css'},
			{test: /\.less$/,loader: 'style!css!less'}
		]
	},
	resolve: {
		extensions: ['', '.js', '.vue', '.jsx'], //后缀名自动补全
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	devtool: 'eval-source-map'
}