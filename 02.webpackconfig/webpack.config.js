/**
 * webpack配置文件
 */
const { resolve } = require('path')


module.exports = {
    //打包模式
    mode: 'production',
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

    ],
    devServer: {

    }
};


  