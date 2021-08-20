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
            //导入模块
            remotes: {
                //导入名称：“远程应用名称@远程应用地址/远程导出文件的名称“
                appone: "app1@http://localhost:3001/app1.js"
            }
        })
     ],
     devServer: {

        contentBase: resolve(__dirname, 'outfile'),
        port: 3002
     }
 };
 
 
   