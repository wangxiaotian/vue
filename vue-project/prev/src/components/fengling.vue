<template>
	<div class="list">
		<div class="item">
			<div class="title">
				<span>{{msg}}</span>
			</div>
			<div class="itemlist">
				<span>男主角：君无邪</span>
				<span>女主角：梅雪烟</span>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data : function(){
			return {
				'msg' : '异世邪君'
			}
		}
	}
</script>

<style lang = "less">
	.list{
		background:#fff;
		width:800px;
		margin:10px auto;
		.item{
			width:100%;
			padding:20px;
			.title{
				padding:10px 0;
			}
			.itemlist{
				padding:10px 0;
				display:flex;
				span{
					flex:1;
				}
			}
		}
	}
</style>