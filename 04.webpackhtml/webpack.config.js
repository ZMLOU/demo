/**
 * webpack配置文件
 */
const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title } = require('process');


module.exports = {
    //打包模式
    mode: 'development',
    //入口文件
    entry: './src/index.js',
    //出口配置
    output: {
        //输出目录（输出目录必须是绝对路径）
        path: resolve(__dirname, 'outfile'),
        filename: 'js/[name].js'
    },
    //模块配置
    module: {
        rules: [
            {
                test: /\.css$/i,
                //use加载顺序：先下后上
                use: [
                    //将JS中的样式，挂在到style标签中
                    MiniCssExtractPlugin.loader,
                    //css-loader按照CommonJs规范，将样式文件，输出到JS文件中
                    'css-loader',
                    //postcss-loader给样式属性添加浏览器兼容前缀
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/i,
                //use加载顺序：先下后上
                use: [
                    //将css打包到独立文件中
                    MiniCssExtractPlugin.loader,
                    //css-loader按照CommonJs规范，将样式文件，输出到JS文件中
                    'css-loader',
                    //postcss-loader给样式属性添加浏览器兼容前缀
                    'postcss-loader',
                    //less-loader将普通的less转成css
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        //将css打包到独立文件中
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new StylelintPlugin({
            //指定需要进行格式校验的文件
            files: ['src/css/*.{css,less,sass,scss}']
        }),
        //压缩css
        new OptimizeCssAssetsPlugin(),
        //html配置
        new HtmlWebpackPlugin({
            //指定打包后的文件名称
            filename: 'index.html',
            //指定html中的变量
            title: "首页",
            //指定生成html的模版
            template: './src/index.html'
        }),
        //html配置
        new HtmlWebpackPlugin({
            //指定打包后的文件名称
            filename: 'about.html',
            //指定html中的变量
            title: "关于",
            //指定生成html的模版
            template: './src/about.html',
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ],
    devServer: {

    }
};


