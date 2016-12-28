//	导入模块
import Vue from 'vue'; 
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './components/caseDiscuss';

//	初始化组件
new Vue(App);

Vue.config.debug = true;

//	使用vue插件
Vue.use(VueRouter);
Vue.use(VueResource);

//	路由映射
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

