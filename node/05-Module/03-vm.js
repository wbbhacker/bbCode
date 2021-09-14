const fs = require('fs')
const { monitorEventLoopDelay } = require('perf_hooks')
const vm = require('vm')

let content = fs.readFileSync('test.txt', 'utf-8')
console.log(content)

// let age = 33
// 1：eval
// console.log(content)
// eval(content)


//2:new Function
// console.log(age)
// let fn = new Function('age', 'return age + 1')
// console.log(fn(age))

//3. vm
vm.runInThisContext(content)

console.log(age)
