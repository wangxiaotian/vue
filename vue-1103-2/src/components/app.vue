<script>
    //es6 
    export default {
        el:"#app",
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"guowenfh",
                age:"2q2"
            }
        }
    }
</script>
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
</template>
<style lang="sass">
    /*一定要加lang不然无法编译*/
    /*测试一下对sass的编译*/
    $qwe:#f5f5f5;
    body{
        background-color: $qwe;
        header{
            width:800px;
            margin:0 auto;
            nav{
                width:100%;
                ul{
                    width:100%;
                    overflow:hidden;
                    display: flex;
                    li{
                        list-style:none;
                        float:left;
                        flex:1;
                        a{
                            text-decoration:none;
                        }
                    }
                }
            }
        }
    }
</style>
