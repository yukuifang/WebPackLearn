var path = require('path')
var webpack=require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')


module.exports = {
    entry:path.resolve(__dirname,'src/js/main.js'),   // app文件 src文件  index.js main.js app.js
    output:{
        path: path.resolve(__dirname,'dist/'),

        filename:'build.js'
    },
    module:{
        rules:[
            // 处理在js中引用css文件
            // npm install style-loader css-loader -save-dev
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader'],
                exclude:'/node_modules/'
            },
            // 处理在js中引用scss文件:
            // npm install sass-loader  node-sass -save-dev
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude:'/node_modules/'
            },
            // 处理在js中引用less文件:
            // npm install less less-loader  -save-dev
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude:'/node_modules/'
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude:'/node_modules/',
                include:'/src/'
            },
            //npm i url-loader file-loader --save-dev
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=5000'
            },
        ]
    },
    plugins: [
        //热加载插件
        new webpack.HotModuleReplacementPlugin(),
        //自动打开浏览器
        new OpenBrowserPlugin({  // npm i open-browser-webpack-plugin --save-dev
            url: 'http://127.0.0.1:8089'
        }),
        // 根据指定的模版index.template.html，自动生成模版index.html以及打包的build.js和资源在内存缓存里面（看不到的），且自动注入<script type="text/javascript" src="build.js"></script>
        //改操作都在内存里面
        new HtmlWebpackPlugin({
             title:'hello',
             template:__dirname + '/src/index.template.html'

        }),
        //可在业务js代码中使用 __DEV__
        new webpack.DefinePlugin({
            __DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV=='dev') || 'false'))
        })
    ],
    resolve:{
        //自动识别补全
        extensions:['.js','.css','.vue','.jsx','.less','.scss']
    },
    devServer:{
        host:'127.0.0.1',
        port:8089,
        historyApiFallback:true, //不跳转
        hot:true,
        inline:true,//实时刷新,
    },

}