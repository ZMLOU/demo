/**
 * webpack打包入口文件
 */
// import data from './data.json'
import './css/main.css';

import './css/main.less';

// 以模块的方式引入图片
import image from './images/pangzi.jpeg';

import image1 from './images/icon/home-blue.png';

// 转译所有js新语法
// import '@babel/polyfill'

// console.log("hello")
// console.log(data)

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
console.log(`接口地址:${API_BASE_URL}`);
