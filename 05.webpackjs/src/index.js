/**
 * webpack打包入口文件
 */
// import data from './data.json'
import './css/main.css';

import './css/main.less';

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
    console.log('promise is working');
    resolve();
  }, 1000);
});

console.log(p);
