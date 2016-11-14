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
            </ul>
        </nav>
    </header>
</template>

<script>
	module.exports = {
		el : '#header',
		data : function(){
			return {
				'msg' : 'hello world'
			}
		}
	}
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