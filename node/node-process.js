// 1. cpu 内存

// console.log(process.memoryUsage())
// console.log(process.cpuUsage())

// console.log(process.cwd())
// console.log(process.version)
// console.log(process.versions)
// console.log(process.arch)
// console.log(process.env)
// console.log(process.platform)

// console.log(process)
// console.log(process.argv)
// console.log(process.argv0)
// console.log(process.pid)
// console.log(process.ppid)
// console.log(process.uptime())

// process.on('exit',(code)=>{
//     console.log('exit'+code)
//     setTimeout(()=>{
//         console.log(456)
//     },1000)
//     // 只能执行同步代码 exit 事件里面
// })

// process.on('beforeExit',(code)=>{
//     console.log('beforeExit'+code)
//     setTimeout(()=>{
//         console.log(123)
//     },1000)
//     // 看下区别于exit 的
// })

// console.log('代码执行完了')
// console.log = function(data){
//     process.stdout.write('---' + data + '\n')
// }
// console.log(11)
// console.log(22)
// const fs = require('fs')


// fs.createReadStream('test.txt')
//     .pipe(process.stdout)


// process.stdin.pipe(process.stdout)

// process.stdin.setEncoding('utf-8')
// process.stdin.on('readable',()=>{
//     let chunk  = process.stdin.read()
//     if(chunk !== null){
//         process.stdout.write('data'+chunk)
//     }
// })