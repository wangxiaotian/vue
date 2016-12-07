<template>
	<div class="list">
		<div class="item">
			<div class="title">
				<span>诛仙</span>
			</div>
			<div class="itemlist">
				<span>男主角：张小凡</span>
				<span>女主角：陆雪琪</span>
				<span>{{message.name}}</span>
			</div>
			<div class="list-item">
				<div class="item" v-for = "item in message.list">
					<p>{{item.title}}</p>
					<p>{{item.info}}</p>
					<p class = "time">{{item.time}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data : function(){ 
			return {
				message : '123'
			}
		},
		mounted : function(){
			this.getData();
		},
		methods : {
			getData : function(){
				this.$http.get('./src/api/test.json')
					.then(function(response){
						console.log(response.data);
						this.$set(this.message = response.data);
					})
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
			.list-item{
				.item{
					p{
						padding:5px 0;
					}
					.time{
						text-align:right;
						font-size: 12px;
						color:#888;
						margin-right:60px;
					}
				}
			}
		}
	}
</style>