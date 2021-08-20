/**
 * webpack配置文件
 */
 const { resolve } = require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 //引入模块联邦插件
 const Mfp = require('webpack').container.ModuleFederationPlugin;


 module.exports = {
     //打包模式
     mode: 'development',
     //入口文件
     entry: './src/index.js',
     //出口配置
     output: {
         //输出目录（输出目录必须是绝对路径）
         path: resolve(__dirname, 'outfile'),
         filename: 'test.js'
     },
     //模块配置
     module: {
         rules: [
 
         ]
     },
     plugins:[

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new Mfp({
            //应用名称（供调用方使用）
            name: 'app1',
            //调用方引入的文件名称
            filename: 'app1.js',
            exposes: {
                //模块名称：模块对应的代码路径
                './Sitename': './src/Sitename.js'
            }
        })
     ],
     devServer: {

        contentBase: resolve(__dirname, 'outfile'),
        port: 3001
     }
 };
 
 
   