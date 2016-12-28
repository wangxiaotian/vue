<script>
    //es6 
    export default {
        el:"#nav",
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
    <router-link to = "/foo">Go to Foo</router-link>
    <router-link to = "/bar">Go to Bar</router-link>
    <router-view></router-view>
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
