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

const fn = function (params) {
  return fn.call()
}
fn.call()