import VueResource from 'vue-resource';
Vue.use(VueResource);

this.$http.get("http://localhost/test.php").then(
            function (res) {
                // 处理成功的结果
                alert(res.body);
            },function (res) {
            // 处理失败的结果
            }
        );