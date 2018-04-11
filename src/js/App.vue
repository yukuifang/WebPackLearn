<!-- 以后项目的根组件 -->
<template>
	<div>
		<!-- 1.0 template主要是放html元素的（html的页面结构） -->
		<span v-text="msg" class="red"></span>
	</div>
</template>

<script>
// 按需导入
// 	import {add} from './calc.js';

	// 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
	export default{  // es6的导出对象的写法
		data(){  //等价于 es5的 data:function(){
			return {
				msg :'hello vuejs111111'
			}
		},
		methods:{
			
		},
		created(){

		}
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
	.red{
		color: red;
	}
	span{
		display: inline-block;
		width: 100px;
		height: 100px;
		background-color: blue;
	}
</style>