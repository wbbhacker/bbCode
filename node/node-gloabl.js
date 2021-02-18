// console.log(global)
// console.log(__filename)
// console.log(__dirname)

// console.log(this)

console.log(this === global);
(function (){
	console.log(this === global)
})()