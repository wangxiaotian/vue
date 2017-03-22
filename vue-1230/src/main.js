import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Publicity from './components/publicity';
import Query from './components/query';
import News from './components/news';
import Communication from './components/communication'
/*初始化实例*/
new Vue(App);

/*使用插件*/
Vue.use(VueRouter);

//	定义路由
const routes = [
	{path: '/',component: Publicity},
	{path: '/公示',component: Publicity},
	{path: '/查询',component: Query},
	{path: '/新闻',component: News},
	{path: '/交流',component: Communication}
]
//	创建路由实例
const router = new VueRouter({
	routes
})
//	创建和挂载根实例
const app = new Vue({
	router
}).$mount('#nav');