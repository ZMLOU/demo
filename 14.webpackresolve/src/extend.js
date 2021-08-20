//为Number的原型添加一个函数
Number.prototype.pad = function( size ) {
    let res = this + '';
    while (res.length < size) {
        res = res + '0';
    }
    return res;
}