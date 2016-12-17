var path = require('path');
module.exports = {
	entry : ['./main.js'],
	output : {
		path : __dirname,
		filename  : 'bundle.js'
	},
	module : {
		loaders:[{
			// 转化ES6的语法
            test: /\.js$/, loader: 'babel', exclude: /node_modules/
		},{
			test: /\.vue$/, loader: 'vue' 
		},{
			test: /\.(html|tpl)$/, loader: 'html-loader'
		}]
	},
	vue: {
        loaders: {
            css: 'style!css!autoprefixer',
        }
    },
	// 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
	devServer:{
		historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
	},
	resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components'),
            'vue$': 'vue/dist/vue.js'
        }
    }
}