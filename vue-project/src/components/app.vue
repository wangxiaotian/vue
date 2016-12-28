<template>
	<header> 
	        <nav>
	            <ul>
	                <li>
	                    <router-link to="/chendong">辰东</router-link>
	                </li>
	                <li>
	                    <router-link to="/xiaoding">萧鼎</router-link>
	                </li>
	                <li>
	                    <router-link to="/tudou">天蚕土豆</router-link>
	                </li>
	                <li>
	                    <router-link to="/fanqie">番茄</router-link>
	                </li>
	                <li>
	                    <router-link to="/fengling">风凌天下</router-link>
	                </li>
	                <li>
	                    <router-link to="/more">更多</router-link>
	                </li>
	            </ul>
	        </nav>
    </header>
    <router-view></router-view>
</template>

<script>
	module.exports = {
		el : '#app',
		data : function(){
			return {
				
			}
		}
	}
import Vue from 'vue'; 
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Chendong from './chendong';
import Xiaoding from './xiaoding';
import Tudou from './tudou';
import Fanqie from './fanqie';
import Fengling from './fengling';
import More from './more';
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
</script>

<style lang = "less">
	@color-border:#ddd;
	.test{
		width:800px;
		margin:0 auto;
		padding:10px 0;
	}
	header{
		width:800px;
		margin:0 auto;
		padding:20px 0;
		background:#fff;
		nav{
			ul{
				display: flex;
				li{
					list-style: none;
					flex:1;
					text-align:center;
				}
			}
		}
	}
</style>