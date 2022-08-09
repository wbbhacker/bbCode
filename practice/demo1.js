

// console.log(a)

// var a = 1;


// var n = 1;
// (function foo(){
//     n = 100;
//     console.log(n);
// }())
// console.log(n);

// function bar() {
//     console.log('bar')
//     Promise.resolve().then(
//         (str) => console.log('micro-bar')
//     )
//     setTimeout((str) => console.log('macro-bar'), 0)
// }


// function foo() {
//     console.log('foo')
//     Promise.resolve().then(
//         (str) => console.log('micro-foo')
//     )
//     setTimeout((str) => console.log('macro-foo'), 0)

//     bar()
// }
// foo()
// console.log('global')
// Promise.resolve().then(
//     (str) => console.log('micro-global')
// )
// setTimeout((str) => console.log('macro-global'), 0)

/*
foo
bar
global
micro-foo
micro-bar
micro-global
macro-foo
macro-bar
macro-global
*/ 