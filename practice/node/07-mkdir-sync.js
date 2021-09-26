// const fs = require('fs')
// const path = require('path')
// /*
// *
// */ 
// // 1. 将来调用时接受路径：a/b/c   用/ 链接
// // 2.利用分隔符进行拆分，将每一项放入一个数组中进行管理['a','b','c']
// // 3.对上述数组进行遍历，需要拿到每项与前一项进行拼接
// // 4 判断一个当前拼接之后的路径是否具有可操作性的权限，如果有，则证明其存在

// function makDirSync(dirPath){
//   let items = dirPath.split(path.sep)
//   console.log(path.sep)
//   console.log(items)
//   for(let i=1; i<=items.length; i++){
//     let dir = items.slice(0,i).join(path.sep)
//     try{
//       fs.accessSync(dir)
//     }catch(err){
//       fs.mkdirSync(dir)
//     }
//   }
// }

// makDirSync('a\\b\\c')

console.log(module.paths)