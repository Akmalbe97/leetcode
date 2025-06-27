// 2620. Counter (Easy)
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// var createCounter = function (n) {
//   return function () {
//     return n++;
//   };
// };

// const counter = createCounter(10);
// // const counter = createCounter(-2);
// console.log(counter());
// console.log(counter());
// console.log(counter());


/// 2665. counter 2  
// var createCounter = function (init) {
//   let n = init
//    function increment () {
//     n++
//     return n
//   }

//   function decrement() {
//     n--
//     return n
//   }

//   function reset() {
//     n = init
//     return n
//   }

//   return {increment, decrement, reset}
// }

// const counter = createCounter(5)
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());


// 2-usul
var createCounter = function (init) {
  let count  = init
  return {
    increment: () => ++count,
    reset: () => count = init,
    decrement: () => --count
  }
}

const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
