const { getOptions } = require('loader-utils')
const marked = require('marked')

module.exports = function(source) {
    //获取loader的配置项
    const options = getOptions(this)
    console.log('my loader', options)
    // return 'my loader'
    // return 'console.log("my loader")'
    const html = marked(source)
    //"<h1 id="关于">关于</h1><h2 id="标题">标题</h2><p><strong>加粗</strong></p>
    // return `module.exports == "${html}"`
    // return `module.exports == ${JSON.stringify(html)}`
    return html

}