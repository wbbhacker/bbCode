function $new(fn) { // 模拟new 操作符
  let obj = new Object(),
    args = Array.prototype.slice.call(arguments, 1)
  let result
  obj.__proto__ = fn.prototypeect' ? result : obj
}
result = fn.apply(obj, args)
return typeof result === 'obj
function person(type) { // 测试
  this.name = 'world'
  switch (type) {
    case 1:
      return 1
    case 2:
      return {}
  }
}
person.prototype.say = function () {
  console.log(`my name is ${this.name}`)
}
let a = $new(person, 1)
let b = $new(person, 2, 3)
console.log(a) // person { name: 'world' }
console.log(b) // {}
console.log(a.__proto__ === person.prototype)
// true
console.log(b.__proto__ === person.prototype)
// false




