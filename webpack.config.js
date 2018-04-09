var webpack=require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/js/main.js',
    output:{
        path: __dirname + '/dist',
        filename:'build.js'
    },
    module:{
        rules:[
            // 处理在js中引用css文件
            // npm install style-loader css-loader -save-dev
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            // 处理在js中引用scss文件:
            // npm install sass-loader  node-sass -save-dev
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
                exclude:'/node_modules/'
            },
            //npm i url-loader file-loader --save-dev
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=50000'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 自动生成html插件
        // new HtmlWebpackPlugin({
        //     title:'hello'
        //
        // })
    ],
    resolve:{
        //自动补全
        extensions:['.js','.css','.vue','.jsx','.less','.scss']
    },
    devServer:{

    }

}