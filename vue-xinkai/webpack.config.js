var path = require('path');

module.exports = {
	entry : './src/main',
	output : {
		path: path.join(__dirname,'./dist'),
		filename : '[name].js',
		publicPath : '/dist/'
	},
	devServer: {
		historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true
	},
	module : {
		loaders: [
        // 解析.vue文件
            { test: /\.vue$/, loader: 'vue' },
        // 转化ES6的语法
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        // 编译css并自动添加css前缀
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
        //.scss 文件想要编译，scss就需要这些东西！来编译处理
        //install css-loader style-loader sass-loader node-sass --save-dev
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        // 图片转化，小于8K自动转化为base64的编码
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
        //html模板编译？
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        //  less文件编译
            { test : /\.less$/, loader: 'style!css!less'}
        ]
	},
	vue: {
		loaders: {
			css: 'style!css!autoprefixer'
		}
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components'),
            'vue$': 'vue/dist/vue.js'
        }
	},
	devtool: 'eval-source-map'
};