/**
 * webpack打包入口文件
 */
// import data from './data.json'
import './css/main.css';

import './css/main.less';

// 以模块的方式引入图片
import $ from 'jquery';
import image from './images/pangzi.jpeg';

import image1 from './images/icon/home-blue.png';

import about from './about.md';

import add from './math.js'
import './extend.js'

console.log('2 + 4 = ', add(2, 4))

console.log((7).pad(3))

// 转译所有js新语法
// import '@babel/polyfill'

// console.log("hello")
console.log1(data)

const showMsg = () => {
  // eslint-disable-next-line
  alert('hello');
};
// eslint-disable-next-line
window.showMsg = showMsg;

const p = new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log('promise is working');
    resolve();
  }, 1000);
});
// eslint-disable-next-line
console.log(p);
// eslint-disable-next-line
const img = new Image();

img.src = image;
// eslint-disable-next-line
document.body.append(img);

// eslint-disable-next-line
const img1 = new Image();

img1.src = image1;
// eslint-disable-next-line
document.body.append(img1);
// eslint-disable-next-line
// console.log(`接口地址:${API_BASE_URL}`);
// eslint-disable-next-line
console.log(about);

// 给body添加一个页脚，包含备案号
$('body').append('<h3>备案号</h3>');

document.getElementById('btn').onclick = function () {
  //import 启动懒加载
  //webpackChunkName: 'desc', 指定懒加载的文件名称
  //webpackPrefech: true  启动预加载
  import (/* webpackChunkName: 'desc', webpackPrefetch: true */'./wp').then (({ desc }) => {
    alert(desc())
  })
}
