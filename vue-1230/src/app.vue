<template>
	<footer id = "nav">
            <ul>
                <li>
                    <router-link to="/公示">红黑榜</router-link>
                </li>
                <li><router-link to="/查询">查询</router-link></li>
                <li>
                    <router-link to="/新闻">新闻</router-link>
                </li>
                <li><router-link to="/交流">交流</router-link></li>
            </ul>
            <router-view></router-view>
    </footer>
</template>

<script>
export default{
		el: '#app'
}
</script>

<style lang = "less" scoped>

#nav{
	width:100%;
	ul{
		width:100%;
		background:#322727;
		color:#cfab62;
		height:50px;
		line-height: 50px;
		position:fixed;
		bottom:0;
		margin: 10px 0;
		display:flex;
		li{
			list-style: none;
			flex:1;
			text-align:center;
			a{
				color:#cfab62;
			}
		}
	}
}

</style>
