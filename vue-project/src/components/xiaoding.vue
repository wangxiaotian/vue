<template>
	<div class="list">
		<div class="item">
			<div class="title">
				<span>诛仙</span>
			</div>
			<div class="itemlist">
				<span>男主角：张小凡</span>
				<span>女主角：陆雪琪</span>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data : function(){
			return {

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