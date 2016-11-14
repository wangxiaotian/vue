<template>
	<div class="list">
		<div class="item">
			<div class="title">
				<span>{{message}}</span>
			</div>
			<div class="itemlist">
				<span>男主角：萧炎</span>
				<span>女主角：薰儿</span>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data : function(){
			return {
				'message' : '斗破苍穹'
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