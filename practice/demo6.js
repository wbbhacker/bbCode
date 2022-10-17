// const obj = {
//   name: '关注@程序员阿斌',
// }
// const fn = function () {
//   console.log(this.name)
// }
// const bound_function_exotic_object = fn.bind(obj)
// //绑定了外部对象的函数
// bound_function_exotic_object.call({ name: '收藏' })
// // 打印：关注@程序员阿斌,绑定的对象失效
// const fn1111 = () => {
//   console.log(this.name === '')
// }
// fn1111.call(obj)
// // 打印：true，绑定的对象失效
'use strict'


function factorial(n, returnVal = 1) {
  'use strict';
  if (n <= 1) return returnVal;
  return factorial(n - 1, n * returnVal);
}

factorial(2000000)