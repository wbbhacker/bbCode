// setTimeout(() => {
//   console.log('s1')
//   Promise.resolve().then(() => {
//     console.log('p1')
//   })
//   process.nextTick(() => {
//     console.log('t1')
//   })
//   setTimeout(() => {
//     console.log('ssss')
//   });
// })


// Promise.resolve().then(() => {
//   console.log('p2')
// })


// console.log('start')


// setTimeout(() => {
//   console.log('s2')
//   Promise.resolve().then(() => {
//     console.log('p3')
//   })
//   process.nextTick(() => {
//     console.log('t2')
//   })
// })

// console.log('end')




// setTimeout(() => {
//   console.log('timeout')
// })

// setImmediate(() => {
//   console.log('immediate')
// })

const fs = require('fs')

fs.readFile('./m1.js', () => {
  setTimeout(() => {
    console.log('timeout')
  }, 0);
  setImmediate(() => {
    console.log('immediate')
  })
})