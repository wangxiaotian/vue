##webpack

### webpack打包工具
	所谓的打包工具确实就是在打包。不同于gulp,gulp没有在其本身中设置打包功能，其是借助第三方模块来做的。而webpack就是个打包工具，貌似啊，可以打包很多东西

	并且其命令就是webpack本身，更加说明了其是打包的工具

### webpack配置文件 webpack.config.js 自动化利器
	webpack在打包的时候，除了在命令行传入参数，还可以通过指定的配置文件来执行。默认情况下，

	会搜索当前目录的webpack.config.js文件，这个文件是一个node.js模块(node模块？没听说过)

	，返回一个json格式的配置信息对象，或者通过--config选项来指定配置文件。


### 功能一
	将所有的js文件都打包到了一个文件里面，有什么用呢？只是减少链接请求吗？还是有其它的作用？


### 功能二 	loader
	loader可以理解为模块和资源的转换器，它本身是一个函数，接收源文件作为参数，返回转换的结果。这样，我们就可以通过require来加载任何类型的模块或文件，比如vue/jsx/sass或图片
	貌似很强大的样子

	loader对应不同的文件有不同的loader模块。比如：css模块style-loader，css-loader

	它将css文件打包到了bundle.js，而页面加载之引入一个打包后的文件，这样做有什么好处呢？真的是因为网络请求吗

### 功能三 插件 plugins
	使用插件可以完成更多loader不能完成的功能。插件的使用一般是在webpack.config.js中的plugins选项中指定。

	webpack本身内置了一些常用的插件，还可以通过npm安装第三方插件。

	有了插件，功能就可以扩展了，如虎添翼



loader和plugin是webpack的两大利器，更多的功能应该是由此开始的。这个真的只是在介绍webpack还没有和vue扯上关系