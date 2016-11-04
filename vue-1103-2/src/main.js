//es6语法：
import Vue from "../node_modules/vue/dist/vue.min.js"; //其实不用写完，会自动查找。可以直接写import Vue from "vue";
//外部引入别的库都可以用这样的方式，比如jquery等。。
//引入我们编写的测试用vue文件。
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//	引入nav文件
import Nav from './components/nav'
new Vue(Nav);

//	引入page文件
import page from './components/page'
new Vue(page);

//	引入shop文件
import Shop from './components/shop'
new Vue(Shop);

Vue.config.debug = true; //开启错误提示
//	这个其实是在初始化vue实例吧

const routes = [{
    path: '/page',
    component: page
}, {
    path: '/shop',
    component: Shop
}]
const router = new VueRouter({
    routes: routes
})
const nav = new Vue({
    router
}).$mount('#app')
