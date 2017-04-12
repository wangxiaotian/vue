/*
 * created by ty
 */
(function() {
    function Vue$3(options) {
        this._init(options);
    }
    /*
     * 	扩展vue原型
     */
    function initMixin(Vue) {
        Vue.prototype._init = function(options){
        	var vm = this;
        	//	uid 	
        	vm._uid = uid++;
        	vm._isVue = true;
        }
    }
})()
