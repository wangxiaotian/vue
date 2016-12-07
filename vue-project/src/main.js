//	模块安装好后并没有默认引用
//	引入模块

import Vue from 'vue'; 
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './components/app';
import Chendong from './components/chendong';
import Xiaoding from './components/xiaoding';
import Tudou from './components/tudou';
import Fanqie from './components/fanqie';
import Fengling from './components/fengling';
import More from './components/more';
//	初始化组件，这个位置有待考量
new Vue(App);
Vue.config.debug = true; //开启错误提示


//	使用vue插件
Vue.use(VueRouter);
Vue.use(VueResource);
 
//	路由映射
const routes = [{
	path : '/',
	component : Chendong
},{
	path : '/chendong',
	component : Chendong
},{
	path : '/xiaoding',
	component : Xiaoding
},{
	path : '/tudou',
	component : Tudou
},{
	path : '/fanqie',
	component : Fanqie
},{
	path : '/fengling',
	component : Fengling
},{
	path : '/more',
	component : More
}]

const router = new VueRouter({
	routes : routes
})

const app = new Vue({
	router
}).$mount('#app');