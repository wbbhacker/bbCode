// const b1 = Buffer.alloc(10)
// const b2 = Buffer.allocUnsafe(10)

// console.log(b1)
// console.log(b2)

//from 可传参  字符串、数组、Buffer

// const b3 = Buffer.from('1','utf-8',)
// console.log(b3)

// const b4 = Buffer.from([10,2,3])
// console.log(b4)
// // <Buffer 0a 02 03>  十六进制
// // utf-8中一个汉字占三个字节

// const b5 = Buffer.from([10,2,'中'], 'utf-8')
// console.log(b5)
// //’ 中‘没有存进来
// // utf-8中一个汉字占三个字节


// const b6 = Buffer.from('中')
// console.log(b6)
// console.log(b6.toString())

// const b7 = Buffer.from([0xe4,0xb8,0xad])
// console.log(b7)
// console.log(b7.toString())


// console.log(Buffer.from('我爱你'))


// const b8 = Buffer.alloc(3)
// const b9 = Buffer.from(b8)
// // 对新空间的拷贝
// console.log(b8)
// console.log(b9)

// b8[0] = 1


// console.log(b8)
// console.log(b9)


// let buf = Buffer.alloc(6)


// // fill 方法
// buf.fill('abc')
// console.log(buf)
// console.log(buf.toString())


// buf.fill('123',1)
// console.log(buf)
// console.log(buf.toString())

// buf.fill('123',1,3)
// console.log(buf)
// console.log(buf.toString())


// buf.fill(123)
// console.log(buf)
// console.log(buf.toString())

// // write

// buf.write('123')
// console.log(buf)
// console.log(buf.toString())


// buf.write('123',1)
// console.log(buf)
// console.log(buf.toString())

// buf.write('123',1,2)
// console.log(buf)
// console.log(buf.toString())

// toString

// buf = Buffer.from('我爱你')
// console.log(buf)
// console.log(buf.toString())
// console.log(buf.toString('utf-8',3,9))

// slice

// buf = Buffer.from('我爱你')
// let b1 = buf.slice()
// console.log(b1)
// console.log(b1.toString())

// let b2 = buf.slice(3,9)
// console.log(b2)
// console.log(b2.toString())

// indexOf
// buf = Buffer.from('我爱你，都爱你')
// console.log(buf)
// console.log(buf.indexOf('爱'))
// console.log(buf.indexOf('爱', 4)) // 第二个参数为便宜量

// let b1 = Buffer.alloc(6)
// let b2 = Buffer.from('中国')

// // b2.copy(b1)
// // console.log(b1.toString())
// // console.log(b2.toString())


// b2.copy(b1,3,3)
// console.log(b1.toString())
// console.log(b2.toString())

// let b1 = Buffer.from('我爱')
// let b2 = Buffer.from('中国')
// let b = Buffer.concat([b1,b2])
// console.log(b)
// console.log(b.toString())


// let b1 = Buffer.alloc(3)

// console.log(Buffer.isBuffer(b1))


Buffer.prototype.split = function(sep){
    let  len  = Buffer.from(sep).length
    let ret = []
    let start = 0
    let offset = 0

    while( (offset = this.indexOf(sep,start)) !== -1){
        console.log(offset)
        ret.push(this.slice(start, offset))
        start = offset + len
    }
    ret.push(this.slice(start))
    return ret
}

let buf = Buffer.from('我爱你中国，中国')
console.log(buf)
let bufArr = buf.split('中')
console.log(bufArr)

bufArr.forEach((v)=>{
    console.log(v.toString()+'|')
})
// console.log(buf.__proto__)
// console.log(buf.__proto__.__proto__)
// console.log(buf.__proto__.__proto__.__proto__)