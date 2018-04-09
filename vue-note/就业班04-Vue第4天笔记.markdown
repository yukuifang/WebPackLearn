# Vue第三天

## 今日内容介绍

- 路由服务vue-router在Vue1.0的写法
- 路由服务vue-router在Vue2.0的写法
- watch和计算属性的学习
- 总结这几天学习中知识点在Vue1.0与2.0的区别
- WebPack学习以及相关-loader的使用


##今日内容学习目标

- 记住vue-router的Vue1.0和2.0版本的基本写法
- 知道使用vue-router实现url传入参数，用$route.params接收参数
- 知道嵌套路由的使用，vue1.0用subRoutes 2.0使用 children
- 记住$watch和计算属性computed的使用
- 记住webpack打包css，less,sass的相关-loader包
- 记住webpack es6转es5的写法和注意点
- 记住webpack完成 url()导入资源文件的打包


# 详细内容

## 1.0 路由vue-router

```
    在一个系统中会由很多页面组成，在Vue开发中这些页面通常使用的是Vue中的组件来实现的，那么当在一个页面要跳转到另外一个页面的时候
    是通过改变url路径来实现的，那么这个时候Vue需要知道当前url对应的是哪个组件页面，这个控制着就是vue-router
    接下来，学习vue-router的相关写法,
    注意的是：vue-router 在vue2.0版本中做了很大的改动，所以要注意Vue的版本来选择预期对应的vue-router版本

```

### 1.0.1 vue-router资源和介绍

- 配合Vue1.0使用的版本的帮助文档地址：https://github.com/vuejs/vue-router/tree/1.0/docs/zh-cn
- 配合Vue1.0使用的vue-router下载地址：https://cdnjs.cloudflare.com/ajax/libs/vue-router/0.7.10/vue-router.min.js
- 配合Vue2.0使用的版本的帮助文档地址：http://router.vuejs.org/zh-cn/installation.html
- 配合Vue2.0使用的vue-router下载地址：https://unpkg.com/vue-router/dist/vue-router.js

### 1.0.2 vue-router在 vue1.0中的使用
   - 1、请下载匹配Vue1.0版本的vue-router文件
   - 2、vue-router使用示例代码
   ![d4-1.png](imgs/d4-1.png "")
   

### 1.0.3 vue-router在 vue2.0中的使用
   - 1、请下载匹配Vue2.0版本的vue-router文件
   - 2、vue-router使用示例代码
   ![d4-2.png](imgs/d4-2.png "")
   
### 1.0.4 vue1.0的路由参数定义实现url的传值
   - 1、请下载匹配Vue1.0版本的vue-router文件
   - 2、vue-router路由参数示例代码
   ![d4-3.png](imgs/d4-3.png "")
   
### 1.0.5 vue2.0的路由参数定义实现url的传值
   - 1、请下载匹配Vue2.0版本的vue-router文件
   - 2、vue-router路由参数示例代码
   ![d4-4.png](imgs/d4-4.png "")
   
### 1.0.6 vue1中嵌套路由的写法
   - 1、请下载匹配Vue1.0版本的vue-router文件
   - 2、vue-router嵌套路由示例代码
   ![d4-5.png](imgs/d4-5.png "")

### 1.0.7 vue1中嵌套路由的写法
   - 1、请下载匹配Vue2.0版本的vue-router文件
   - 2、vue-router嵌套路由示例代码
   ![d4-6.png](imgs/d4-6.png "")
   

## 2.0 watch与计算属性computed
```
    watch与computed均可以监控程序员想要监控的对象，当这些对象发生了改变以后，可以触发回调函数做一些逻辑处理
```

### 2.0.1 watch用法举例

- 监听data中定义的属性

   ![d4-7.png](imgs/d4-7.png "")
   
- 监听路由对象$route

   ![d4-8.png](imgs/d4-8.png "")

### 2.0.2 computed用法举例

- 监听data中定义的属性

   ![d4-9.png](imgs/d4-9.png "")


## 3.0 Vue1.0与Vue2.0区别总结

```
    总结前3天中学习知识点中Vue1.0和2.0的区别    
```

- 总结如下

   ![d4-10.png](imgs/d4-10.png "")
   

## 4.0 webpack

### 4.0.1 webpack介绍
- webpack是一个资源的打包工具，分为1.0和2.0版本，可以将 .js,  .css , image等静态资源当做一个模块来进行打包，那么每一种模块都是有一个对应的 loader来实现
- webpack 1.0版本官网：https://webpack.github.io/docs/usage.html
- webpack 2.0版本官网：https://webpack.js.org/
- 在这个项目中使用webpack 1.14.0
- node环境的安装

```
     webpack是基于nodejs运行的，所以在安装webpack之前必须先安装nodejs环境,安装步骤如下
      1、去 https://nodejs.org/en/ 中下载当前操作系统匹配的版本,windows下软件名称通常叫做 node.exe
      2、双击node.exe一路安装好，由于node.exe已经包含了npm工具，所以npm也能正常使用了
      3、由于直接使用npm install 安装第三方包是去国外网站上下载，有可能会被墙而安装失败，所以我们要将下载源切换到国内淘宝上因此需要利用 npm install nrm -g安装一个全局的nrm
      4、安装好nrm以后，在cmd命令面板中输入： nrm use taobao 将下载源切换到淘宝，可以使用 nrm ls 查看当前使用的下载源
      5、也可安装淘宝提供的类似于npm的工具 cnpm来替代npm安装node包,安装包命令和npm一样，安装cnpm命令： npm install cnpm -g
```
- webpack的安装

```
    安装webpack步骤：  
    第一种安装方式： 
        在cmd命令行面板中 执行： npm install webpack@1.14.0 -g 将webpack1.14.0版本安装为全局就能够在cmd命令行面板中使用webpack指令了   
        
    第二种安装方式： 
        在cmd命令行面板中 执行： cnpm install webpack@1.14.0 -g 将webpack1.14.0版本安装为全局就能够在cmd命令行面板中使用webpack指令了         
```

### 4.0.1 webpack常用指令和webpack.config.js配置文件

- webpack常用指令

```
      webpack 入口文件.js 输出文件.js
      webpack         // 最基本的启动webpack的方法，默认查找名称为 webpack.config.js文件
      webpack --config webpack.config.js    // 指定配置文件    
	  
	  webpack -p      // 对打包后的文件进行压缩
	  webpack -d      // 提供source map，方便调式代码
```

- webpack.config.js配置文件的作用

```
    如果只在cmd命令面板中输入 webpack指令，后面不跟任何参数的话，则默认查找的是 webpack.config.js文件，在这个文件中可以配置入口文件，输出文件以及相关loader和插件等,以增强webpack的功能
```

-  一个常用webpack1.0版本的webpack.config.js文件结构：

```javascript
// 导入html-webpack-plugin 包，用来根据模板自动生成index.html
var htmlwp = require('html-webpack-plugin');

module.exports={	
	entry:'./src/main.js', // 1.0 定义打包的入口文件路径
	output:{
		path:'./dist',   //打包以后的文件存放目录
		filename:'build.js'  // 打包以后生成的文件名称
	},
	module:{
		loaders:[
			{
				// 将当前项目中所有的.js文件都要进行es6转es5操作，node_moudels除外
				test:/\.js$/,   //表示当前要打包的文件的后缀正则表达式
				// loader:'babel-loader?presets[]=es2015', //如果写到这里，将来在打包.vue文件的时候会报错，表示先利用css-loader解析.css文件，再调用style-loader打包
				loader:'babel-loader',
				exclude:/node_modules/  //node_modules中的所有.js文件不去转换，提高打包性能
			}			
		]
	},
	babel:{
		 presets: ['es2015'],  //表示es6转es5
		 plugins: ['transform-runtime']  //这句代码就是为了解决打包.vue文件不报错
	},
	plugins:[
        new htmlwp({
          title: '首页',  //生成的页面标题
          filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
          template: 'index1.html' //根据index1.html这个模板来生成(这个文件请你自己生成)
        })
    ]
}
    
```


### 4.0.2 webpack中loader介绍

- loader介绍

```
    webpack本身不支持css,less,sass,js,image等相关资源的打包工作的，它仅仅提供了一个基础的框架，在这个框架上借助于相关的loader才可以实现css,less,sass,js,image等相关资源的打包工作

```


### 4.0.3 webpack相关配置

```
   在使用loader之前需要在当前项目目录下打开cmd命令面板，输入: npm init 初始化一个 package.json文件来存放相关的 loader包
```

#### 4.0.3.1 打包css资源演示

```
webpack中使用css-loader和style-loader这两个loader来处理css资源的打包工作，所以使用前必须在项目中先安装这两个包:
npm i css-loader style-loader --save-dev
```

- 在webpack.config.js中配置这两个loader

![d4-11.png](imgs/d4-11.png "")

- 在项目中建立一个site.css文件，并且在main.js中导入

![d4-12.png](imgs/d4-12.png "")

- 在cmd中执行webpack命令

![d4-13.png](imgs/d4-13.png "")


#### 4.0.3.2 打包sass资源演示

```
webpack中使用sass-loader，css-loader，style-loader来处理.scss文件的打包工作,而sass-loader需要依赖于node-sass所以使用前必须在项目中先安装这些包，
并且node-sass的某些文件下载是需要去google上的，为了防止被墙而导致安装失败，所以建议使用cnpm来安装：
cnpm install node-sass sass-loader css-loader style-loader --save-dev
```

- 在webpack.config.js中配置这两个loader

![d4-14.png](imgs/d4-14.png "")

- 在项目中建立一个site1.scss文件，并且在main.js中导入

![d4-15.png](imgs/d4-15.png "")

- 在cmd中执行webpack命令

```
  在项目根目录下打开cmd命令面板，输入：webpack  回车即可打包完成
  此时检查build.js文件的内容，sass语法是变成了css语法表示打包成功
```


#### 4.0.3.3 打包less资源演示

```
需要安装的node包有：
	css-loader：  编译css
	style-loader：编译css
	less-loader： 编译less
	less:  less-loader的依赖包
	
    在项目根目录下打开cmd命令面板，输入：
    npm install less less-loader style-loader css-loader --save-dev 回车即可完成安装

```

- 在webpack.config.js中配置这两个loader

![d4-16.png](imgs/d4-16.png "")

- 在项目中建立一个site1.scss文件，并且在main.js中导入

![d4-17.png](imgs/d4-17.png "")

- 在cmd中执行webpack命令

```
  在项目根目录下打开cmd命令面板，输入：webpack  回车即可打包完成
  此时检查build.js文件的内容，less语法是变成了css语法表示打包成功
```


#### 4.0.3.4 打包url()请求的资源

```
需要安装的node包有：
	url-loader：打包通过url()方式的请求资源
	file-loader: url-loader的依赖loader
	
    在项目根目录下打开cmd命令面板，输入：
    npm install url-loader file-loader --save-dev 回车即可完成安装

```

- 在webpack.config.js中配置这两个loader

![d4-18.png](imgs/d4-18.png "")

- 在site.css文件导入一个图片

![d4-19.png](imgs/d4-19.png "")

- 在cmd中执行webpack命令

```
  在项目根目录下打开cmd命令面板，输入：webpack  回车即可打包完成
  检查是否成功分两种情况：
  1、如果打包的图片大小大于配置文件中 url-loader?limit= 中的limit值的话，则会在目录下看到一张单独的一个图片
  2、如果打包的图片大小小于等于配置文件中 url-loader?limit= 中的limit值的话，则会将图片以base64格式存储在build.js中
   
  请按照上述两种情况去验证是否打包成功
```


#### 4.0.3.5 ECMAScript6语法转ECMAScript5语法

```
需要安装的node包有：
	babel-core
    babel-loader
    babel-preset-es2015
    babel-plugin-transform-runtime：这个包主要是在打包.vue组件页面中的es6语法需要
 
	
    在项目根目录下打开cmd命令面板，输入：
    npm install babel-core babel-loader babel-preset-es2015 babel-plugin-transform-runtime  --save-dev 回车即可完成安装

```

- 在webpack.config.js中配置这两个loader

![d4-20.png](imgs/d4-20.png "")

- 在main.js中使用es6语法导入site.css

```
    import '../statics/css/site.css'
```

- 在cmd中执行webpack命令

```
  在项目根目录下打开cmd命令面板，输入：webpack  回车即可打包完成
  检查build.js文件中，如果出现了类似于 require('../statics/css/site.css'); 但是看不到import '../statics/css/site.css' 表示转换成功
```


