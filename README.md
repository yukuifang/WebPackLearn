//生产的打包主要考虑性能等情况
//npm 指向的主要入口,故webpack默认找webpack.config.js
var pkg = require('./package.json')
var path = require('path')
var webpack=require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:{
        app: path.resolve(__dirname,'src/js/main.js'),
        //将第三方发布需要的依赖（node_modules中的）单独打包
        vendor:Object.keys(pkg.dependencies)
    },
    output:{
        path: __dirname + "/dist",
        filename:'[name].[chunkhash:8].js'

    },
    module:{
        rules:[
            // 处理在js中引用css文件
            // npm install style-loader css-loader -save-dev
            {
                test:/\.css$/,
                exclude:'/node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?minimize=true']
                })

            },
            // 处理在js中引用scss文件:
            // npm install sass-loader  node-sass -save-dev
            {
                test: /\.scss$/,
                exclude:'/node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?minimize=true', 'sass-loader' ]
                })
            },
            // 处理在js中引用less文件:
            // npm install less less-loader  -save-dev
            {
                test: /\.less$/,
                exclude:'/node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ 'css-loader?minimize=true', 'less-loader' ]
                })
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude:'/node_modules/',
                include:'/src/'
            },
            //npm i url-loader file-loader --save-dev
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                loader: 'url-loader?limit=50000&name=images/[hash:8].[name].[ext]'

            },
            {
                test: /\.(woff|woff2|svg|ttf|eot)$/,
                loader: 'url-loader?limit=50000&name=font/[name].[chunkhash:8]'


            },
        ]
    },
    plugins: [
        //标准个人信息版权
        new webpack.BannerPlugin("Copyright by https://github.com/yukuifang"),
        // 根据指定的模版index.template.html，自动生成模版index.html以及打包的build.js和资源在内存缓存里面（看不到的），且自动注入<script type="text/javascript" src="build.js"></script>
        //改操作都在内存里面
        new HtmlWebpackPlugin({
            title:'hello',
            template:__dirname + '/src/index.template.html'

        }),
        //process.env 是node环境才能使用，自定义process.env供前端使用，且帮助编译运行时压缩最小化
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify(process.env.NODE_ENV)
            }
        }),
        //可在业务js代码中使用 __DEV__
        new webpack.DefinePlugin({
            __DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV=='dev') || 'false'))
        }),

        // new webpack.optimize.OccurenceOrderPlugin(),

        // //将代码混淆以及压缩，换行等替换
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        //分离css和js
        //对于 webpack 2  npm install --save-dev extract-text-webpack-plugin@2.1.2 ,不然报错
        new ExtractTextPlugin("/css/[name].[chunkhash:8].css"),
        // 第三方发布需要的依赖（node_modules中的）配置
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            path: __dirname + '/dist/js/',
            filename:'[name].[chunkhash:8].js'
        })
    ],
    resolve:{
        //自动识别补全
        extensions:['.js','.css','.vue','.jsx','.less','.scss']
    },

}