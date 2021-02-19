 // "type":"module",
const fs = require('fs')
const path = require('path')

// readfile

// fs.readFile(path.resolve('data.txt'),'utf-8',(err,data)=>{
//   console.log(err)
//   if(!err){
//     console.log(data)
//   }
// })




// writeFile

// fs.writeFile(path.resolve('data.txt'),'hello, node.js',{
//   mode:438,
//   flag:'w+',
//   encoding:'utf-8'
// }(err,data)=>{
//   console.log(err)
//   if(!err){
//     fs.readFile(path.resolve('data.txt'),'utf-8',(err,data)=>{
//       if(!err){
//         console.log(data)
//       }
//     })
//   }
// })

// appendFile()

// fs.appendFile('data.txt','中国',(err)=>{
//   console.log('写入成功')
// })

// // copyFile()

// fs.copyFile('data.txt','text.txt',()=>{
//   console.log('拷贝成功')
// })

// watchFile
fs.watchFile('data.txt',{interval:20},(curr, prev)=>{
  // curr 修改之后的信息
  // prev 修改之前的信息
  if(curr.mtime !== prev.mtime){
    console.log('文件被修改了')
    fs.unwatchFile('data.txt')
  }
})







