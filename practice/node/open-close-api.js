const fs = require('fs')
const path = require('path')

// open
// fs.open(path.resolve('test.txt'),'r',(err, fd)=>{
//     console.log(fd)
//     fs.close(fd,err=>{
//         console.log('关闭成功')
//     })
// })  


// read 所谓的读操作就是将数据从磁盘文件中写入到buffer 中

let buf = Buffer.alloc(10)

// read
// fd 定位当前被打开的文件
// buf 用于表示当前缓冲区
// offset 表示当前buf 的哪个位置开始执行写入
// lenth 表示当前次写入的长度
// position 表示当前从文件的哪个文职开始读取

// fs.open('test.txt','r',(err, rfd)=>{
//     console.log(rfd)
//     // 1 是从buf 的第一位开始写
//     // 2 是从磁盘的文件中那个文件去读
//     fs.read(rfd,buf,1,4,2,(err, readBytes, data)=>{
//         console.log(readBytes)
//         console.log(data)
//         console.log(data.toString())
//     })
// })


// write 将缓冲区的内容写入磁盘文件中

buf  =  Buffer.from('1234567890')

fs.open('b.txt','w',(err, wfd)=>{
    fs.write(wfd, buf,0,3,0,(err, written, buffer)=>{
        console.log(written)
        console.log(buffer)
        fs.close(wfd)
    })
})