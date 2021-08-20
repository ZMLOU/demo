//调用app1中的模块

import('appone/Sitename').then(res => {
    const title = res.default('应用B')
    document.body.append(title)

})