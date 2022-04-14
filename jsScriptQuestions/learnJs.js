// async function foo() {
//     const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
//     console.log(result1,"result")
//     const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
//     console.log(result2,"result")
//  }

const { assertName } = require("graphql");

 
//  foo()

//  console.log('i am wating ')


// diffrence between .then and await statement

// async function foo() {
//    const a = await 1
//    console.log(a)
//     console.log("i want to kanow")
//  }

//  function foo() {
//     const a=  Promise.resolve(1).then(() => undefined)
//     console.log(a)
//     console.log("i am wating")
//  }
//  foo()

// function resolveAfter2Seconds() {
//     console.log("starting slow promise")
//     return new Promise(resolve => {
//       setTimeout(function() {
//         resolve("slow")
//         console.log("slow promise is done")
//       }, 2000)
//     })
//   }
  
//   function resolveAfter1Second() {
//     console.log("starting fast promise")
//     return new Promise(resolve => {
//       setTimeout(function() {
//         resolve("fast")
//         console.log("fast promise is done")
//       }, 1000)
//     })
//   }

//   async function sequentialStart() {
//     console.log('==SEQUENTIAL START==')
  
//     // 1. Execution gets here almost instantly
//     const slow = await resolveAfter2Seconds()
//     console.log(slow) // 2. this runs 2 seconds after 1.
  
//     const fast = await resolveAfter1Second()
//     console.log(fast) // 3. this runs 3 seconds after 1.
//   }

// Promice call in javaScript

// async function promice(){
//     let v
//     try {
//       v =  await fetch('')
//     } catch (error) {
//         console.log(error)
//     }
//     return v
// }
// The return value of an async
//  function is implicitly wrapped in Promise.resolve

// what is promise?
// Ans
// The promice object represents the eventual completion (or failure) of an asynchronous
// operations and its resulting value


// promise Example
// let myPromiceExample = new Promise((res,rej)=>{
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//   // In this example, we use setTimeout(...) to simulate async code.
//   // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout(() => {
//         res("Success") // Yay! Everything went well!
//     }, 300);
// })

// myPromiceExample.then((successMessage)=>{
//     // successMessage is whatever we passed in the resolve(...) function above.
//   // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage)
// }).catch((e)=>{
// console.log(e)
// })
// async function myAsyncExample() {
//     let v
//     try {
//         v = await myPromiceExample
//         console.log("Yay! " + v)
//     } catch (error) {
//         console.log(error)
//     }
// }
// myAsyncExample()