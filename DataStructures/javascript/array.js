// javascript 是 弱语言类型、解释型语言
// 创建数组
  // 字面量创建数组
let arr = [1,2,3,5,8];

  // 构造函数方式
let arr1 = new Array(1,3,5,19);


// 读取元素
let item =  arr[0];
console.log(item);

let arr2 = new Array(10);

// 插入元素、删除元素
/*
  修改原数组的方法
  pop()、push()、shift()、unshift()
  copyWithin()、fill()、reverse()、splice()、sort()

  返回新数组
  concat()、includes()、indexOf()、join()

  // 迭代方法
  entries()、every()、filter()、find()、findIndex() 
  forEach()、keys()、map()、reduce()、reduceRight()、some()、values()

*/ 

// 更新元素
arr[1] = 4;
console.log(arr);
