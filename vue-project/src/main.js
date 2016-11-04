//	模块安装好后并没有默认引用
//	引入模块

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app';



//	初始化vue组件
//	
new Vue(APP);

Vue.config.debug = true; //开启错误提示


//	初始化路由
Vue.use(VueRouter);

const routes = [{
	path : '/',
	component : App
}]

const router = new VueRouter({
	routes : routes
})

const app = new Vue({
	router
}).$mount('#app');