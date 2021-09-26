const fs = require('fs')
// 1.打开a文件，利用read 将数据保存到buffer 暂存起来
// 2.打开b 文件，利用write 将buffer中数据写入到b文件中

let buf = Buffer.alloc(10)

const BUFFER_SIZE = buf.length
let readOffset = 0



fs.open('a1.txt', 'r', (err, rfd) => {
  fs.open('b1.txt', 'w', (err, wfd) => {
    function next() {
      fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes, buffer) => {
        // 打开b文件写入数据
        console.log(readBytes)
        if (!readBytes) {
          // 如果条件成立，说明内容已经读取完毕
          fs.close(rfd, () => { })
          fs.close(wfd, () => { })
          console.log('拷贝完成')
          return
        }
        console.log(readBytes)
        readOffset += readBytes
        fs.write(wfd, buf, 0, readBytes, (err, written) => {
          console.log('写入成功')
          next()
        })
      })
    }
    next()
  })
})
