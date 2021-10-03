import fs from 'fs'
const rs = fs.createReadStream('./text3.txt', {
  flags: 'r',
  encoding: null,
  fd: null,
  mode: 438,
  autoClose: true,
  start: 0,
  // end: 3,
  highWaterMark: 4
})

// rs.on('data', (chunk) => {
//   console.log(chunk.toString())
//   rs.pause()
//   setTimeout(() => {
//     rs.resume()
//   }, 2000);
// })

// rs.on('readable', () => {
//   let data
//   while ((data = rs.read(1)) !== null) {
//     console.log(data.toString())
//     console.log('------', rs._readableState.length)
//   }
// })

rs.on('open', (fd) => {
  // 创建或实例化之后即可被触发
  console.log(fd, '文件打开了')
})

rs.on('close', () => {
  console.log('文件关闭了')
})
let bufferArr = []
rs.on('data', (chunk) => {
  bufferArr.push(chunk)
  console.log(chunk)
})

rs.on('end', () => {
  console.log(Buffer.concat(bufferArr).toString())
  console.log('当数据被清空之后')
})

rs.on('error', () => {
  console.log('出错了')
})