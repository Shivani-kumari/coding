// var obj = {
//     count : 10,
//     doSomethingLater : function (){
//         console.log(this.count)
//         function a() {
//             console.log(this.count)
//         }
//         a()
//         setTimeout(function(){ // the function executes on the window scope
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     }
// }

// obj.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.


// var obj = {
//     count : 10,
//     doSomethingLater : function(){
//         // The traditional function binds "this" to the "obj" context.
//         setTimeout( () => {
//             // Since the arrow function doesn't have its own binding and
//             // setTimeout (as a function call) doesn't create a binding
//             // itself, the "obj" context of the traditional function will
//             // be used within.
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     }
// }

// obj.doSomethingLater();

// check two object equal or not

// const a = {
//     myName:'shivani'
// }
// const c = a
// let count 
// const b = {
//  myName:'shivani'
// }
// for(x in a){
//     console.log(x)
//     if(b.hasOwnProperty(x) && a[x]==b[x]){
//         count = true
//     }

// }

// console.log(count,"count")

// import notes the space inslde the string does not return false

// if(' '){
//     console.log("hello")
// }

// console.log(true%1)

// function x() {
//     setTimeout(function(){
//         console.log(i)
//     },1000)
//     var i = 1
// }
// x()

// Memoization
// find the square of Number

// const prevValues = []



// function square(n) {
//     if(prevValues[n]){
//         return prevValues[n]
//     }
//     let result = 0
//     for(let i =1;i<=n;i++){
//         for(let j = 1;j<=n;j++){
//             result +=1
//         }
//     }
//     prevValues[n] = result
//     return result
// }
// console.log(square(300000))
// console.log(square(300000))
// console.log(square(300000))
// console.log(square(300000))
// console.log(square(300000))

// function fib(n,prevValues = []) {
//     let result 
//     if(prevValues[n] != null){
//         // console.log("helo")
//         return prevValues[n]
//     }
//     if(n <= 2){
//         result = 1
//     }else{
//         result = fib(n-1,prevValues) + fib(n-2,prevValues)
//     }
//     prevValues[n] = result
//     console.log(prevValues)
//     return result
// }
// console.log(fib(10))
// console.log(fib(5))
// console.log(fib(10))

let sum = 0
const calc = (n) =>{
    for(let i =0;i<=n;i++){
        sum +=i
    }
    return sum
}
// console.log(calc(5))

const memoize = (fun)=>{
    let cashe = {}
    return function(...args){
        let n = args[0]
        console.log(args,"...args")
        if(n in cashe){
            console.log("cashe",cashe[n])
            return cashe[n]
        }else{
            console.log("first time calc")
            let result=fun(n)
            cashe[n] = result
            return result
        }
    }
}
console.time()
const efficient = memoize(calc)
console.log(efficient(5))
console.timeEnd()

console.log(efficient(5))
console.timeEnd()