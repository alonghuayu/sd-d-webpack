//webpack 是node写出来的 node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',//模式 production development
    entry: './src/index.js',//入口
    output: {
        // filename: 'bundle.[hash:8].js',//打包后的文件名
        filename: 'bundle.js',//打包后的文件名
        path: path.resolve(__dirname, 'dist')//路劲必须是一个绝对路劲
    },
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true, // 删除双引号
                collapseWhitespace: true,
            },
            hash: true,//hash戳
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        rules: [
            //规则  css-loader 接续 @inport  这种语法
            //style-loader 把css插入到header 标签中
            // loader 的特点 希望单一
            // loader 的用法 字符串只用一个loader
            // loader 的顺序 默认是从右到左执行
            //loader 还可以 写成 对象方式
            {
                test: /\.css$/, use:
                    [
                        //     {
                        //     loader: 'style-loader', //对象方式
                        //     options: {
                        //         // insertAt: 'top',//插入自定义样式到
                        //     }
                        // },
                        MiniCssExtractPlugin.loader,
                        'css-loader' 
                        //css前缀插件
                    ]    
            },
            {
                test: /\.less$/, use: [
                    // {
                    //     loader: 'style-loader', //对象方式
                    //     options: {
                    //         // insertAt: 'top',//插入自定义样式到
                    //     }
                    // },
                    MiniCssExtractPlugin.loader,
                    'css-loader', //解析 @import 
                    //css前缀插件 
                    'less-loader'  // less - > css
                ]
            },
        ]
    },
}