<template>
    <div id="main">
        <div class="search_box">
            <input type="text" class="search" placeholder="输入病种、关键字、医生名字">
            <span class = "send"><a href="javascript:;">搜索</a></span>
        </div>
        
        <div class="page">
            <div class="case_item">
                <!-- <a href = "discussion-detail.html" class="item" v-for ="item in discuss_data.case_list" >
                        
                    <div class="header">
                        <div class="pic">
                            <img src="{{= item.doctor_entity.head_img_path}}" alt="">
                        </div>
                        <div class="header_info">
                            <span>{{= item.doctor_entity.name}}</span>
                            <span>{{= item.doctor_entity.hospital}}</span>
                        </div>
                    </div>
                                
                    <div class="title">
                        <p>{{= item.title}}</p>
                    </div>
                    <div class="info">
                        <p>{{= item.content.replace(/&&space&&/g,'<br />')}}</p>
                    </div>
                    <div class="end">
                        <div class="date">
                            {{= item.create_date}}
                        </div>
                    </div>
                </a> -->
            </div>
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
    </div>
	
</template>

<script>
	module.exports = {
        el : '#app',
		data : function(){
			return {
				discuss_data : '123'
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

    /* colors */

@color-bg: #F0F0F0;
@color-border: #D9D9D9;
@color-grey-border: #D9D9D9;
@color-grey: #999999;
@color-default: #333333;
@color-red-border: #df5f0e;
@color-red: #fb731e;
@color-blue: #4CC1D2;
/* 字体颜色，共三种 */
@16: 17px;
@14: 14px;
@13: 13px;

    .search_box {
    width: 94%;
    margin: 10px auto;
    display:flex;
    .search {
        flex:1;
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
    display:flex;
    background-color: #fff;
    padding: 15px 0;
    border-top: 1px solid @color-grey-border;
    >div {
        flex:1;
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