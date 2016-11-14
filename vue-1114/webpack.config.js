
//	node path 对象有时间好好看下
var path = require('path');

//	config
module.exports = {
	entry : './src/main',
	output : {
		path : __dirname,
		filename : 'bundle.js'
	},
	//	服务器配置相关，封装比较好
	devServer : {
		historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
	},
	//	加载器
	module : {
		loaders : [{
			// 解析.vue文件
            { test: /\.vue$/, loader: 'vue' },
            // 转化ES6的语法
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            //html模板编译？
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
		}]
	},
	// 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    }
}