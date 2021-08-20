
//自定义插件
class MyPlugin {
    constructor (options) {
        console.log("插件选项:", options)
        this.userOptions = options || {}
    }
    //必须有apply方法
    apply(compiler) {
        //在钩子上挂在功能
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            for (const name in compilation.assets) {
                console.log(name)
                //判定是否是css文件
                // if (name.endsWith('.css')) {
                if (name.endsWith(this.userOptions.target)) {
                    //获取处理前的文件内容
                    const contents = compilation.assets[name].source()
                    //将原来的内容中的注释去掉
                    const noComments = contents.replace(/\/\*[\s\S]*?\*\//g,'')
                    //将处理后的结果替换掉
                    compilation.assets[name] = {
                        source: () => noComments,
                        size: () => noComments.lengtn
                    }
                }
            }
        })
    }
}

module.exports = MyPlugin