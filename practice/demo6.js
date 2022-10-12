const fn = function (...args) {
  console.log(args)
  console.log(arguments)
  console.log(Array.prototype.slice.call(arguments, 1))
}

fn('sss')

