const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

// function mkDir(dirPath, cb ){
//   let parts = dirPath.split('/')
//   let index = 1
//   console.log(parts)
//   function next(){
//     if( index > parts.length) return cb && cb()
//     let current = parts.slice(0,index++).join('/')
//     fs.access(current , (err)=>{
//       if(err){
//         fs.mkdir(current,next)
//       }else{
//         next()
//       }
//     })
//   }
//   next()

// }

// mkDir('a/b/c',()=>{
//   console.log('创建成功')
// })

// 将access 与mkdir 处理成async 风格

// const access = promisify(fs.access)
// const mkdir = promisify(fs.mkdir)

// async function mkDir(dirPath,cb){
//   let parts = dirPath.split('/')
//   for(let index = 1; index <=parts.length; index++){
//     let current = parts.slice(0,index).join('/')
//     try{
//       await access(current)
//     }catch(err){
//       await mkdir(current)
//     }
//   }
//   cb && cb()
// }

// mkDir('a/b/c',()=>{
//   console.log('创建成功')
// })

//需求：自定义一个函数 ，接受一个路径，然后执行删除
// 1.判断当前出入的路径是否为一个文件，直接删除当前文件即可
// 2.如果当前出入的是一个目录，我们需要继续读取目录中的内容，然后再执行删除操作
// 3.将删除行为定义成一个函数，然后通过递归的方式进行复用
// 4.将当前名称拼接成在删除时可使用的路径

function myRmDir(dirPath, cb){
  fs.stat(dirPath,(err ,statObj)=>{
    if(statObj.isDirectory()){
      fs.readdir(dirPath,(err,files)=>{
        console.log(files)
        let dirs = files.map(item=>{
          return path.join(dirPath, item)
        })
        let index = 0
        function next(){
          if(index === dirs.length) return fs.rmdir(dirPath,cb)
          let current = dirs[index++]
          myRmDir(current, next)
        }
        next()
      })
    }else{
      fs.unlink(dirPath, cb)
    }
  })
}
myRmDir('a/b',()=>{
  console.log('删除成功了')
})










