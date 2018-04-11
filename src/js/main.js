// require('../statics/css/site')
// require('../statics/scss/site1')
// require('../statics/less/site2')
//
// var v1 = document.querySelector('#v1')
// var v2 = document.querySelector('#v2')
// var res = document.querySelector('#res')
// var btn = document.querySelector('#btn')
//
// btn.onclick = function () {
//     var v1Value =  parseFloat(v1.value)
//     var v2Value =  parseFloat(v2.value)
//     var add = require('./cal')
//     var resValue = add(v1Value,v2Value)
//     res.value = resValue
// }

// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 利用Vue对象进行解析渲染
new Vue({
    el:'#app',
    // render:function(create){create(App)} //es5的写法
    render:c=>c(App)  // es6的函数写法 =>：goes to
});