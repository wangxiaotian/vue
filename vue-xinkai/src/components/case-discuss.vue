<template>
	<div class="search_box">
		<input type="text" class="search" placeholder="输入病种、关键字、医生名字" value = "ni">
		<span class = "send"><a href="javascript:;">搜索</a></span>
	</div>
	<div class="page">
		
	</div>

	<div class="footer">
		<div class="all">
			<a href = "javascript:;"><i class = "i_on"></i><span class = "active_menu">全部</span></a>
		</div>
		<div class="fabu">
			<a href = "javascript:;"><i></i><span>我发布的</span></a>
		</div>
		<div class="canyu">
			<a href = "javascript:;"><i></i><span>我参与的</span></a>
		</div>
	</div>
</template>

<script>
	module.exports = {
        el : '#app',
		data : function(){
			return {
				
			}
		}
	}
</script>

<style lang = "less">
	
	.search_box {
    width: 94%;
    margin: 10px auto;
    .display();
    .search {
        .flex-1();
        display: inline-block;
        padding: 6px 0;
        text-align: center;
        border: none;
        border: 1px solid @color-grey-border;
        border-radius: 5px;
        font-size:@13;
    }
    span{
        display:inline-block;
        width:60px;
        padding:6px 0;
        background-color: @color-blue;
        text-align:center;
        margin-left:10px;
        border-radius: 5px;
        a{
            display:inline-block;
            color:#fff;
        }
    }
} 

	.footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    .display();
    background-color: #fff;
    padding: 15px 0;
    border-top: 1px solid @color-grey-border;
    >div {
        .flex-1();
        text-align: center;
        a {
        	display:inline-block;
        	position: relative;
        	span{
        		color:@color-grey;
        		display:inline-block;
        	}
        	.active_menu{
        		color:@color-blue;
        	}
            i {
                position: absolute;
                display: inline-block;
            }
        }
    }
    .all {
        a {
        	display:inline-block;
        	position: relative;
        	span{
        		display:inline-block;
        		margin-left:25px;
        	}
            i {
                position: absolute;
                left: 0px;
                top:-1px;
                width: 20px;
                height: 20px;
                display: inline-block;
                background: url('../images/all-grey.png') no-repeat;
                background-size: 100% 100%;
            }
            .i_on{
            	background: url('../images/all-on.png') no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .fabu {
        a{
        	span{
				margin-left:25px;
        	}
        	i{
        		width:20px;
        		height: 20px;
        		background: url('../images/fabu-grey.png') no-repeat;
        		background-size: 100% 100%;
        		top:0px;
        		left:0px;
        	}
        	.i_on{
        		background: url('../images/fabu-on.png') no-repeat;
        		background-size: 100% 100%;
        	}
        }
    }
    .canyu {
        a{
        	span{
        		margin-left:25px;
        	}
        	i{
        		width:20px;
        		height: 20px;
        		background: url('../images/canyu-grey.png') no-repeat;
        		background-size: 100% 100%;
        		top:0px;
        		left:0px;
        	}
        	.i_on{
        		background: url('../images/canyu-on.png') no-repeat;
        		background-size: 100% 100%;
        	}
        }
    }
}

</style>