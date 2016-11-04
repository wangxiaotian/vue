<template>
	<div class="page">
		<div class="list">
			<div class="item">
				<p>糯米</p>
				<p>糯米里面啥也没有</p>
			</div>
			<div class="item">
				<p>糯米</p>
				<p>糯米里面啥也没有</p>
			</div>
			<div class="item">
				<p>糯米</p>
				<p>糯米里面啥也没有</p>
			</div>
			<div class="item">
				<p>糯米</p>
				<p>糯米里面啥也没有</p>
			</div>
			<div class="item">
				<p>糯米</p>
				<p>糯米里面啥也没有</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		el : '#app'
	}
</script>

<style lang = "sass">
	@color-border:#ddd;
	.page{
		width:1200px;
		margin:0 auto;
		background:#fff;
		.list{
			width:100%;
			.item{
				padding:10px 0;
				border-bottom:1px dashed @color-border;
			}
		}
	}
</style>