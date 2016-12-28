<template>
	
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
	$qwe:#f5f5f5;
	*{
		padding:0;
		margin:0;
	}
    body{
        background-color: $qwe;
        header{
            width:800px;
            margin:0 auto;
            background:#fff;
            margin-bottom:20px;
            nav{
                width:100%;
                ul{
                    width:100%;
                    overflow:hidden;
                    display: flex;
                    padding:20px 0;
                    li{
                        list-style:none;
                        float:left;
                        flex:1;
                        text-align:center;
                        a{
                            text-decoration:none;
                        }
                    }
                }
            }
        }
    }
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