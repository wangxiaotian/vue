## vue-router

### 路由结构
	首先，路由需要挂载到一个标签上，这个标签就是绑定路由的htmldom薄板，路由的链接一般就是写在这个标签里边。
	路由从发生的过程来看，是由链接开始的。vue2.0引用了新的标签router-link,它有一个to属性指定路由路径。点击后就会根据路径寻址。
	在寻址的过程中，程序执行进入router的配置中。router的配置要引入vue-router,它有两个必要参数。一个是路由的路径，一个是路由路径对应的需要加载的vue组件。故：要定义或者暴露出需要路由的vue组件。
	其中，配置vue-router,通过标签引入和模块引入的配置方法不相同。
