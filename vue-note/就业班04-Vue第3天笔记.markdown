# Vue第三天

## 今日内容介绍

- Vue1.0过渡动画的实现
- Vue2.0过渡动画的实现
- 组件定义和注册的各种写法
- 组件的动态切换
- 组件的传值


##今日内容学习目标

- 知道vue动画效果的三个css的作用
- 记住vue1.0和2.0利用css的三个类来控制过渡动画的写法
- 记住vue1.0和2.0中利用animate.css来控制过渡动画写法
- 记住vue1.0和2.0中过渡动画的钩子函数使用
- 知道组件的定义和注册写法 Vue.component()
- 知道利用components实现子组件的定义
- 知道利用props实现父组件传值给子组件的写法
- 知道利用component 控制组件的切换
- 知道利用$emit和v-on来实现子组件传值给父组件
- 知道v-el与v-ref的区别和使用

# 详细内容

## 1.0 Vue过渡动画

```
    通过 Vue.js 的过渡系统，可以在元素从 DOM 中插入或移除时自动应用过渡效果。Vue.js 会在适当的时机为你触发 CSS 过渡或动画
    常用场景有：
    1、条件渲染 （使用 v-if）
    2、条件展示 （使用 v-show）
    3、动态组件
```

### 1.0.1 transition的作用

```
    1、在Vue1.0版本中为了应用过渡效果，需要在实现过渡动画的元素上使用 transition 特性，示例：
     <div v-if="show" transition="my-transition"></div> ,my-transition 可以有程序员自定义名称
      

    2、 在Vue2.0版本中改变成了由 transition特性的写法变成了 <transition></transition>的写法    
     <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    

     ***transition通常与下面指令结合在一起使用：
       - v-if
       - v-show

```

### 1.0.2 Vue中过渡动画的几种常用写法
- 利用css控制过渡动画
    - Vue1.0写法
        ![d3-1.png](imgs/d3-1.png "")        

    - Vue2.0写法
         ![d3-2.png](imgs/d3-2.png "")   
         
- 利用animate.css控制过渡动画
    - Vue1.0写法
         ![d3-3.png](imgs/d3-3.png "")  

    - Vue2.0写法
          ![d3-4.png](imgs/d3-4.png "")  
          
- 利用钩子函数控制过渡动画
    - Vue1.0 过渡动画API文档：http://v1-cn.vuejs.org/guide/transitions.html
    - Vue2.0 过渡动画API文档：http://cn.vuejs.org/v2/guide/transitions.html

- Vue1.0钩子函数
    ```
      1、过渡动画进入
          beforeEnter:function(el){}      过渡动画进入之前，一般在这个方法中定义目标元素的初始位置
          enter:function(el,done){}       过渡动画进入中，在这个方法中定义目标元素的结束位置
          afterEnter:function(el){}       过渡动画结束后，通常在这个方法里面重置初始值
          enterCancelled:function(el){}   取消过渡动画时被调用
      
      2、过渡动画离开
          beforeLeave:function(el){}      动画离开之前触发    
          leave:function(el){}            过渡动画进入中触发
          afterLeave:function(el){}       过渡动画离开结束后
          leaveCancelled:function(el){}   取消过渡动画时被调用

    ```
      3、使用示例：
         ![d3-5.png](imgs/d3-5.png "")

- Vue2.0钩子函数

```
     1、过渡动画进入
          before-enter      过渡动画进入之前，一般在这个方法中定义目标元素的初始位置
          enter             过渡动画进入中，在这个方法中定义目标元素的结束位置
          after-enter       过渡动画结束后，通常在这个方法里面重置初始值
          enter-cancelled   取消过渡动画时被调用
      
      2、过渡动画离开
          before-leave      动画离开之前触发    
          leave             过渡动画进入中触发
          after-leave       过渡动画离开结束后
          leave-cancelled   取消过渡动画时被调用

```

   3、使用示例：
   ![d3-6.png](imgs/d3-6.png "")
    


## 2.0 Vue组件

```
    组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码
```

### 2.0.1 组件的定义和注册
- 写法1：使用Vue.extend方法定义组件，使用 Vue.component方法注册组件

   ![d3-7.png](imgs/d3-7.png "")

- 写法2:使用 Vue.component方法定义注册组件一步到位
    
   ![d3-8.png](imgs/d3-8.png "")

- 写法3：将组件内容定义到template模板中
    
   ![d3-9.png](imgs/d3-9.png "")
    
- 写法4：将组件内容定义到类型为 x-template的script模板中
    
   ![d3-10.png](imgs/d3-10.png "")    
    

### 2.0.2 组件中实现指令以及事件绑定
    
   ![d3-11.png](imgs/d3-11.png "")
    

### 2.0.3 组件中注册子组件
    
   ![d3-12.png](imgs/d3-12.png "")
    
### 2.0.4 组件中利用component中的is来实现组件切换
    
   ![d3-13.png](imgs/d3-13.png "")
   
### 2.0.5 实现父组件传值给子组件
    
   ![d3-14.png](imgs/d3-14.png "")

### 2.0.6 实现子组件传值给父组件
    
   ![d3-15.png](imgs/d3-15.png "")
   
### 2.0.7 通过v-el获取到dom对象
    
   ![d3-16.png](imgs/d3-16.png "")
   
### 2.0.8 通过v-ref获取到整个组件的对象
    
   ![d3-17.png](imgs/d3-17.png "")
