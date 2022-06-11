// async function foo() {
//     const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
//     console.log(result1,"result")
//     const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
//     console.log(result2,"result")
//  }




 
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

// var x = 10;

// diffrence between normal function and constructor function

// function createFunction1() {
//     var x = 20;
//     return new Function('return x'); // this |x| refers global |x|
// }

// function createFunction2() {
//     var x = 20;
//     function f() {
//         return x; // this |x| refers local |x| above
//     }
//     return f;
// }

// var f1 = createFunction1();
// console.log(f1());          // 10
// var f2 = createFunction2();
// console.log(f2());          // 20


// implement own filter methad

// let arr = [1,2,3,4,5]
// let res = arr.filter((el)=>{
//     return el>4
// })

// Array.prototype.myFilter = function (cb) {
//     let arr = []
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i])){
//             arr.push(this[i])
//         }
//     }
//     return arr
// }
// console.log(arr.myFilter((e)=>e>2))

// function foo() {
//     let a = b = 0;
//     a++;
//     console.log(a,b)
//     return a;
//     }
//     foo();
//     console.log(typeof a); // => ???
//     console.log(typeof b); // => ???

// reduce polifill my reducer function.

// Array.prototype.myReducer = function (callBack,inialValue) {
//     let totalRes = inialValue
//     for(let i=0;i<this.length;i++){
//         totalRes = totalRes? callBack(totalRes,this[i]):this[i]
       
//     }
    
//     return totalRes
// }

// let arr = [1,2,3,4]
//   let res = arr.myReducer(
//     (previousValue, currentValue) => previousValue + currentValue
    
//   )
//   console.log(res)

// function curring(a) {
//     return function (b){
//         if(b){
//             return curring(a+b)
//         }else{
//             return a
//         }
//     }
// }
// console.log(curring(10)(20)(30)())

// prmise and setTimeout questions
// console.log("1");

// Promise.resolve(1).then(function resolve() {
//   console.log('2');
// });

// Promise.resolve(1).then(function resolve() {
//   setTimeout(function timeout() {
//     console.log('3');
//   }, 400);
// });


// setTimeout(function timeout() {
//   console.log('4');
// }, 0);

// console.log("5");

// setTimeout(function timeout() {
//   console.log('6');
// }, 500);

// console.log("7");

// function outer() {
//   let a = 0
//   return function () {
//     let b = ++a
//     console.log(b)
//   }
// }
// const res = outer()
// const res1 = outer()
// both res and res1 produce diffrent res beause res and res1 have same but diffrent reference
// res()
// res()
// res1()

// memozation of founction

// const callBack = (n)=>n*10
// function memozation(cb) {
//   let count =0
//   let res =0
//   return function (n) {
//     if(count==0){
//       count++
//      res= cb(n)
    
//     }
//     return res
//   }

// }
// const a = memozation(callBack)
// console.log(a(10))
// console.log(a(20))
// console.log(a(30))

// bind methoed implement

// function memozation(cb) {
//   return cb
// }

// const preson = {
//   name : "shivani",
//   include : function () {
//     console.log("hii my name is ", this.name)
//   }
// }
// let res = memozation(preson.include.bind(preson))
// res()

// function sum(a) {

//     return (b)=>{
//         return b ? sum(a + b) : a
//     }
// }
// sum(2)
// sum(3)
// sum(4)
// sum(5)

// console.log(sum(2)(3)(4)(5)())

// let and const hoisting variable declacred with let and const are also hoisted but unlike var, are not initialize with a default valueFromAST.

// {
//     // TDZ starts at beginning of scope

//     const func = () => console.log(letVar)   // OK

//     // Within the TDZ letVar access throws `ReferenceErrror`
//     let letVar = 3   // End of TDZ (for letVar)

//     func()  // Called outside TDZ!
// }
// please make the questions  
// {a:{b:5,d:3}} to {"a_b":5,"a_d":3}
