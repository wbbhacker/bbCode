function A() {
  this.name = 'xiaofang'
}

let B = new A()

console.log(B.__proto__ === A.prototype)


console.log(B.prototype)


// B.__proto__
// B.prototype

// A.__proto__
// A.__proto__.__proto__