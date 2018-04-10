# Vue第一天

## 今日内容介绍

- Vue介绍
- MVVM模式介绍
- Vue开发流程
- Vue常用系统指令
- 实现品牌管理案例
- Vue调试工具

##今日内容学习目标

- 了解Vue的版本和常用学习资源
- 理解MVVM模式要解决的问题
- 能够分清楚MMVM中的M，V，VM在Vue的编码结构中是对应哪些代码块的
- 能够记住Vue的3个编码步骤
- 知道使用v-的相关的指令，例如v-text,v-html,v-model,v-for,v-on等
- 理解并记住Vue对象中的 el,data,methods三个属性的作用
- 能够利用vue的知识实现品牌管理的增，删除，列表展示
- 能够利用filterBy过滤器实现数据过滤
- 知道利用Vue-DevTools调试工具监控Vue运行时数据


# 详细内容

## 1.1 课程介绍

###1.1.1 时间安排

- 总课时：8天
    + Vue基础 3.5天
    + Vue项目 4.5天
 
###1.1.2 课程的特点和目的

　　在公司的项目开发中常常为了开发效率和可扩展性考虑，为了方便在后期维护软件，降低维护成本，公司常常会选择业内已经成熟的框架来架构自己的产品，其中Vue作为一个国产的前端开发框架，拥有完整的中文文档和学习门槛低而被越来越多的公司清奈，因此作为前端开发人员要想能够更快的看懂公司框架更好的融入到公司业务中，也必须学习Vue。
    
   这套Vue项目课程从设计上是以常见开发需求作为依托，学习完毕以后，使同学们能够感受到公司通常开发的功能是什么样的，该如何去和后台配合。整个课程在教学中是由浅入深，从0到1带领学生一步步的将项目功能做出来，主要特点有：
   - 首先会带领同学们学习Vue的基础知识
   - 其次带领大家从0到1搭建一个项目框架，使学生拥有项目的架构能力
   - 最后带领大家在自己搭建好的项目框架上实现一个个项目功能，对前面知识的一个综合运用，整个过程中让同学们感受一个完整的项目是如何产生的


## 1.2 项目截图
- 首页
- 
 ![d1-1.png](imgs/d1-1.png "")
 
- 新闻资讯
- 
![d1-2.png](imgs/d1-2.png "")
![d1-3.png](imgs/d1-3.png "")

- 图片分享
- 
![d1-4.png](imgs/d1-4.png "")
![d1-5.png](imgs/d1-5.png "")
![d1-6.png](imgs/d1-6.png "")

- 商品购买
- 
![d1-7.png](imgs/d1-7.png "")
![d1-8.png](imgs/d1-8.png "")
![d1-9.png](imgs/d1-9.png "")

- 购物车
- 
![d1-10.png](imgs/d1-10.png "")

## 1.3 Vue前置知识
### 1.3.1 Vue学习资源
- Vue官网： https://cn.vuejs.org/
- Vue GitHub：https://github.com/vuejs/vue
- Vue1.0 在线文档：http://v1-cn.vuejs.org/guide/
- Vue2.0 在线文档：https://cn.vuejs.org/v2/guide/
- Vue1下载地址：http://v1-cn.vuejs.org/js/vue.js
- Vue2下载地址：https://unpkg.com/vue@2.2.1/dist/vue.js


### 1.3.2 Vue使用现状
- Vue项目：饿了么招聘：https://jobs-mobile.ele.me/#!/
- Vue 1.0.26开发的移动版项目：https://www.uhouzz.com/ 
- Vue.js v1.0.28开发的移动版项目： http://m.jianguanoa.com/#!/index （开启chrome调试工具中的移动版浏览）
- Vue.js v1.0.28开发的移动版项目： http://www.fangdd.com/group/shanghai?zhihu
- Vue开发的PC版本项目：http://lushi.zhujunwu.cn/#!/builds
- 知乎上的一个专帖:[国内有哪些公司在用Vue.js，有什么心得](https://www.zhihu.com/question/38213423 "")


## 1.4 开始课程
### 1.4.1 MVVM模式
- MVVM拆分解释为：
    - Model:负责数据存储
    - View:负责页面展示
    - View Model:负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示
    
- MVVM要解决的问题是将业务逻辑代码与视图代码进行完全分离，使各自的职责更加清晰，后期代码维护更加简单

- 用图解的形式分析Ajax请求回来数据后直接操作Dom来达到视图的更新的缺点，以及使用MVVM模式是如何来解决这个缺点的


- Vue中的 MVVM
![d1-11.png](imgs/d1-11.png "")


### 1.4.2 Vue初体验（记住Vue的编写步骤）

![d1-12.png](imgs/d1-12.png "")

### 1.4.3 Vue常用系统指令
- 插值表达式{{}}：
- 
    ```
        数据绑定最常见的形式就是使用 “Mustache” 语法（双大括号）的文本插值        
        例如：<span>Message: {{ msg }}</span>
        Mustache 标签将会被替代为对应数据对象上 msg 属性（msg定义在data对象中）的值。
        无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。
    
        {{}}对JavaScript 表达式支持，例如：
        {{ number + 1 }}
        {{ ok ? 'YES' : 'NO' }}
        {{ message.split('').reverse().join('') }}
        
        但是有个限制就是，每个绑定都只能包含单个表达式，如下表达式无效：
        <!-- 这是语句，不是表达式 -->
        {{ var a = 1 }}
        <!-- 流控制也不会生效，请使用三元表达式 -->
        {{ if (ok) { return message } }}
        
    ```
    
- v-text
- 
    ```
        v-text可以将一个变量的值渲染到指定的元素中,例如：
        <div v-text="msg"></div>
        new Vue({
            data:{
                msg:'hello ivan'                                            
               }
        });
        
        输出结果：
        <div>hello ivan</div>              

    ```
- v-html
-  
    ```
      双大括号和v-text会将数据解释为纯文本，而非 HTML 。
      为了输出真正的 HTML ，你需要使用 v-html 指令：
      例如：<div v-html="rawHtml"></div>
          new Vue({
              data:{
                  rawHtml:'<h1>hello ivan</h1>'
                }
          })
          
        被插入的内容都会被当做 HTML,但是对于没有HTML标签的数据绑定时作用同v-text和{{}}
        
    注意：使用v-html渲染数据可能会非常危险，因为它很容易导致 XSS（跨站脚本） 攻击，使用的时候请谨慎，能够使用{{}}或者v-text实现的不要使用v-html

    ```
- v-cloak
- 
  ```
    v-cloak指令保持在元素上直到关联实例结束编译后自动移除，v-cloak和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
    通常用来防止{{}}表达式闪烁问题
    例如：
    <style>
     [v-cloak] { display: none } 
    </style>
    
     <!-- 在span上加上 v-cloak和css样式控制以后，浏览器在加载的时候会先把span隐藏起来，知道 Vue实例化完毕以后，才会将v-cloak从span上移除，那么css就会失去作用而将span中的内容呈现给用户 -->
    <span v-cloak>{{msg}}</span>    
    
     new Vue({
              data:{
                  msg:'hello ivan'
                }
          })
    
  ```
    
- v-model以及双向数据绑定
-  
  ```
    1、在表单控件或者组件上创建双向绑定
    2、v-model仅能在如下元素中使用：
       input
       select
       textarea
       components（Vue中的组件）
       
    3、举例：
       <input type="text" v-model="uname" />
       
     new Vue({
              data:{
                  uname:'' //这个属性值和input元素的值相互一一对应，二者任何一个的改变都会联动的改变对方
                }
          })
          
    4、修饰符（了解）：
        .lazy - 取代 input 监听 change 事件
        .number - 自动将输入的字符串转为数字
        .trim - 自动将输入的内容首尾空格去掉
  ```
  
- v-bind
-  
  ```
    1、作用：可以给html元素或者组件动态地绑定一个或多个特性，例如动态绑定style和class
    
    2、举例：
        <img v-bind:src="imageSrc">   
        <div v-bind:class="{ red: isRed }"></div>
        <div v-bind:class="[classA, classB]"></div>
        <div v-bind:class="[classA, { classB: isB, classC: isC }]">
        <div v-bind:style="{ fontSize: size + 'px' }"></div>
        <div v-bind:style="[styleObjectA, styleObjectB]"></div>
           
    3、缩写形式
        <img :src="imageSrc">
        <div :class="{ red: isRed }"></div>
        <div :class="[classA, classB]"></div>
        <div :class="[classA, { classB: isB, classC: isC }]">
        <div :style="{ fontSize: size + 'px' }"></div>
        <div :style="[styleObjectA, styleObjectB]"></div>

  ```
  
- v-for
-  
  ```
  
      1、作用：通常是根据数组中的元素遍历指定模板内容生成内容
      2、用法举例：
          <div v-for="item in items">
              {{ item.text }}
            </div>
            new Vuew({
                data:{
                    items:[{text:'1'},{text:'2'}]                
                    }
            });
      3、可以为数组索引指定别名（或者用于对象的键）：
          Vue1.0写法:
            <div v-for="(index,item) in items"></div>
            <div v-for="(key,val) in user"></div>
              new Vue({
                data:{
                    items:[{text:'1'},{text:'2'}],
                    user:{uname:'ivan',age:32}
                    }
            });
            
          Vue2.0写法:
            <div v-for="(item, index) in items"></div>
            <div v-for="(val, key) in user"></div>
            <div v-for="(val, key, index) in user"></div>            
             new Vue({
                data:{
                    items:[{text:'1'},{text:'2'}],
                    user:{uname:'ivan',age:32}
                    }
            });
            
       4、v-for 默认行为试着不改变整体(为了性能考虑的设计)，而是替换元素。迫使其重新排序的元素,在Vue2.0版本中需要提供一个 key 的特殊属性，在Vue1.0版本中需要提供一个 track-by="$index":
       
       Vue2.0写法：
       <div v-for="item in items" :key="item.id">
          {{ item.text }}
        </div>
        
       Vue1.0写法：
       <div v-for="item in items" track-by="$index">
          {{ item.text }}
        </div>
        
      5、vue1.0与vue2.0对于v-for使用区别总结：
          1、vue1.0中有$index ，而vue2.0中将$index移除
          2、vue1.0中 (index,item) in list  而 vue2.0 变成了 (item,index) in list的写法
          3、vue1.0中使用 track-by来标记dom对象的唯一性，vue2.0中改成了 :key
          
       
  ```
  
- v-if
-  
  ```
    1、作用：根据表达式的值的真假条件来决定是否渲染元素，如果条件为false不渲染（达到隐藏元素的目的），为true则渲染。在切换时元素及它的数据绑定被销毁并重建
    
    2、示例：
        <!-- Handlebars 模板 -->
        {{#if isShow}}
          <h1>Yes</h1>
        {{/if}}

        通常我们使用写法居多：
        <h1 v-if="isShow">Yes</h1>
        
        也可以用 v-else 添加一个 “else” 块：
        <h1 v-if="isShow">Yes</h1>
        <h1 v-else>No</h1>
        
        注意：v-else 元素必须紧跟在 v-if 元素否则它不能被识别。
        
         new Vue({
                data:{
                   isShow:true
                    }
            });
        
  ```
  
- v-show
-  
  ```
    1、根据表达式的真假值，切换元素的 display CSS 属性，如果为false，则在元素上添加 display:none来隐藏元素，否则移除display:none实现显示元素
    

    2、示例：
         <h1 v-show="isShow">Yes</h1>
        
         new Vue({
                data:{
                   isShow:true
                    }
            });
            
    3、v-if和v-show的总结：
         v-if和v-show 都能够实现对一个元素的隐藏和显示操作,但是v-if是将这个元素添加或者移除到dom中，而v-show
         是在这个元素上添加 style="display:none"和移除它来控制元素的显示和隐藏的
  ```
  
- v-on
-  
  ```
      1、作用：绑定事件监听，表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略，用在普通的html元素上时，只能监听 原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。
      
      2、常用事件：
          v-on:click
          v-on:keydown
          v-on:keyup
          v-on:mousedown
          v-on:mouseover
          v-on:submit
          ....
          
      3、v-on提供了很多事件修饰符来辅助实现一些功能，例如阻止冒泡等
        事件修饰符有如下：
        .stop - 调用 event.stopPropagation()。
        .prevent - 调用 event.preventDefault()。
        .capture - 添加事件侦听器时使用 capture 模式。
        .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
        .{keyCode | keyAlias} - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
        .native - 监听组件根元素的原生事件。
        
      4、示例：
          <!-- 方法处理器 -->
        <button v-on:click="doThis"></button>
        <!-- 内联语句 -->
        <button v-on:click="doThat('hello', $event)"></button>
        <!-- 缩写 -->
        <button @click="doThis"></button>
        <!-- 停止冒泡 -->
        <button @click.stop="doThis"></button>
        <!-- 阻止默认行为 -->
        <button @click.prevent="doThis"></button>
        <!-- 阻止默认行为，没有表达式 -->
        <form @submit.prevent></form>
        <!--  串联修饰符 -->
        <button @click.stop.prevent="doThis"></button>
   
        
       5、v-on的缩写形式：可以使用@替代 v-on:
        <button @click="doThis"></button>
        
  ```


### 1.4.4 利用系统指令实现品牌管理案例
- 目的
   ```
      通过案例熟悉Vue系统指令的用法和结构的写法练习，做到知识点的巩固和学会应用，并且在案例的扩展需求中，学习Vue新知识点，做到先有需求，再有知识点学习，最后到知识点的应用，让学员学习知识点的同时学会知识点的应用

   ```

- 实现品牌列表数据展示
- 
  + 效果
  
    ![d1-13.png](imgs/d1-13.png "")
        
        
  + 代码
  
    ![d1-14.png](imgs/d1-14.png "")

- 实现品牌数据添加
- 
 + 效果
 
    ![d1-15.png](imgs/d1-15.png "")
    

 + 代码
 
    ![d1-16-1.png](imgs/d1-16-1.png "")
    ![d1-16-2.png](imgs/d1-16-2.png "")
    
- 实现品牌数据删除
 + 效果
 
    ![d1-17.png](imgs/d1-17.png "")
    
 + 代码
 
     ![d1-18.png](imgs/d1-18.png "")
     ![d1-19.png](imgs/d1-19.png "")

- 实现根据品牌名称过滤符合条件的数据
 + 效果
 
     ![d1-20.png](imgs/d1-20.png "")
 
 + 代码  
 
     ![d1-21.png](imgs/d1-21.png "")

### 1.4.5 Vue在Chrome浏览器的调试工具Vue-Devtools
- 作用
 
    ```html
       Vue-Devtools是Chrome浏览器的一个扩展，通过Vue-Devtools可以实现在Chrome浏览器的调试工具栏中查看到Vue开发页面的相关数据对象，方法，事件，状态信息，方便程序员监控和调试解决问题
        
    ```
    
- 地址

    ```
        GitHub地址：https://github.com/vuejs/vue-devtools
                
        Chrome插件地址：https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN
        
    ```
    
- 通过Chrome插件地址安装插件(注意：这种方式需要翻墙)
  + 1、在Chrome浏览器中打开地址：https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN
  
  + 2、点击里面的“+ 添加至CHROME” 按钮即可安装插件
  
     ![d1-22.png](imgs/d1-22.png "")


  + 3、安装以后，在Chome浏览器中打开使用Vue开发的站点后按F12打开调试工具即可看到Vue调试工具
  
    ![d1-23.png](imgs/d1-23.png "")



- 通过Vue-DevTools源码安装（需要先安装node.exe）
   + 1、https://nodejs.org/en/ 下载node.exe安装
   + 2、去https://github.com/vuejs/vue-devtools 下载到文件
   + 3、进入vue-devtools-master工程 先执行npm install再执行npm run build
   + 4、进入vue-devtools-master\shells\chrome文件夹中修改mainifest.json 中的persistant为true
   + 5、打开谷歌浏览器设置--->扩展程序-->勾选开发者模式--->加载已解压的扩展程序--->选择“vue-devtools-master\shells下的chrome”文件夹，至此恭喜已经安装成功！











































      

