/*
	entry.js
 */

document.getElementById('app').innerHTML = "这是我第一个打包成功的程序";

//	添加

require('./first.js');

//	添加css文件

/*require('!style!css!./style.css');*/
//	这个看着不好记的字符是css对应的loader前缀。可以根据模块类型来自动绑定需要的loader

require('./style.css');

//	引入vue

var Vue = require('vue');

new Vue({
	el : 'test',
	data : {
		message : 'hellow vue.js'
	}
})