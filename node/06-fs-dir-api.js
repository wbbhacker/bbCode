const fs = require('fs')

// access
// fs.access('a1.txt',(err)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log('有操作权限')
//   }
// })

// fs.stat('a1.txt',(err, statObj)=>{
//   console.log(statObj.size)
//   console.log(statObj.isFile())
//   console.log(statObj.isDirectory())
// })

// fs.mkdir('a/b/c',{recursive:true},(err)=>{
//   if(!err){
//     console.log('创建成功')
//   }else{
//     console.log(err)
//   }
// })

// fs.rmdir('a',{recursive:true},(err)=>{
//   if(!err){
//     console.log('删除成功')
//   }else{
//     console.log(err)
//   }
// })

// fs.readdir('a',(err,files)=>{
//   console.log(files)
// })

fs.unlink('a/a.txt',(err)=>{
  if(!err){
    console.log('删除成功')
  }
})