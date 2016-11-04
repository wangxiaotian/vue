<template>
	<header>
        <nav>
            <ul>
                <li><a href="javascript:;">主页</a></li>
                <li><a href="javascript:;">商城</a></li>
                <li><a href="javascript:;">列表</a></li>
                <li><a href="javascript:;">购物车</a></li>
                <li><a href="javascript:;">关于</a></li>
            </ul>
        </nav>
    </header>
	<div class="page">
		<div class="list">
			<div class="item">
				<span>佣兵天下</span>
				<span>未知</span>
			</div>
			<div class="item">
				<span>诛仙</span>
				<span>萧鼎</span>
			</div>
			<div class="item">
				<span>凡人修仙传</span>
				<span>忘语</span>
			</div>
			<div class="item">
				<span>斗破苍穹</span>
				<span>天蚕土豆</span>
			</div>
			<div class="item">
				<span>遮天</span>
				<span>辰东</span>
			</div>
		</div>
	</div>
</template>

<style lang = "sass">
	.page{
		width:800px;
		margin:0 auto;
		background-color:#fff;
		.list{
			padding:0 15px;
			padding-bottom:50px;
			.item{
				display:flex;
				border-bottom:1px dashed #ddd;
				padding:10px 0;
				span:first-child{
					flex:1;
					display:inline-block;
				}
				span:last-child{
					display:inline-block;
					width:70px;
					text-align:left;
				}
			}
			.item:last-child{
				border:none;
			}
		}
	}
</style>

<script>
	export default {
		el : '#page',
		data : function(){
			return{

			}
		}
	}
</script>