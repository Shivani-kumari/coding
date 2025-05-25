
//  function sum(...arg1) {
//      let total = arg1.reduce((a,b)=>a+b,0)
//     function innner (...arg2){
//         if(arg2.length ===0){
//             return total
//         }
//        total+= arg2.reduce((a,b)=>a + b,0)
//        return innner
//     }
//     return innner

//  }

// console.log(sum(1)(2, 3)(4, 5, 6)()); // Output: 21

// var a =2;
// b=1
// function f(z){
//     b=3
//     c=4;
//     var d = 6
//     e=1

//     function g(){
//         var en =0;
//         d= 3*d
//         return d
//     }
//     console.log(en,"checking the value")
//     return g()
//     var en = 3// it run in complie phase
// }
// f(1)

// function outer() {
//     let sum =0
//     function inner() {
//         sum +=2
//         return sum
//     }
//     return inner
// }
// let addation = outer()
// console.log(addation())
// console.log(addation())
// console.log(addation())


// for (var index = 0; index <= 7; index++) {
    
//     function nameo(i) {
//         setTimeout(()=>console.log(i),3000)
//     }
//     nameo(index)
// }

// const obj = { greet:
//      function(){
//         console.log(this)
//      },
//      a:console.log(this,"checking this value inside") }; 
// obj.greet();
// obj.a

    const person = {
        name: "Alice",
        greet: function () {
        setTimeout(() => {
            console.log(this.name)
        }, 0);
        },
    };
    
    const {name,greet} = person;
    // greet();
    // console.log(name)
// person.greet()
  
// async function example() {
//     console.log("Start");
//     const result = await Promise.resolve("Resolved!");
//     console.log(result);
//     console.log("End");
// }

// example();
// console.log("Outside async");

// function Person(name) {
//     this.name = name
// }
// Person.prototype.sayHello = function (){
//     console.log(`Hello, my name is ${this.name}`)
// }
// const alice = new Person("Alice")
// const shivani = new Person("Shivani")
// alice.sayHello()
// shivani.sayHello()


Array.prototype.myRduce = function (callBack,inialValue) {
            let res 
            let start 
            if(inialValue){
                res = inialValue
                start = 0
            }else{
                res = this[0]
                start = 1
            }
            for(let i=start;i<this.length;i++){
                res = callBack(res,this[i],i,this)
            }
            return res
}
// let array = [1,2,3,4,5]    
// console.log(array.myRduce((acc,currentValue)=>acc + currentValue,2))

// const numbers = [1, 2, 3, 4, 5, 6];

// // Filter for even numbers
// const isEven = (num) => num % 2 === 0;

// const evenNumbers = filterUsingReduce(numbers, isEven);
// console.log(evenNumbers); // Output: [2, 4, 6]

// // Filter for numbers greater than 3
// const greaterThanThree = (num) => num > 3;

// const largeNumbers = filterUsingReduce(numbers, greaterThanThree);
// console.log(largeNumbers); // Output: [4, 5, 6]

let array = [50,25,5,20,10]
function sort(array) {
    for(let i =0;i<array.length-1;i++){
        for(let j=0;j<array.length-i;j++){
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}
// Array.prototype.mysort = function (){
//     for(let i =0;i<this.length-1;i++){
//         for(let j=0;j<this.length-i;j++){
//             if(this[j]>this[j+1]){
//                 let temp = this[j]
//                 this[j] = this[j+1]
//                 this[j+1] = temp
//             }
//         }
//     }
//     return this
// }

// console.log(array.mysort())

// function add(x) {
    
//     return function (y){
//         if(y){
//             return add(x+y)
//         }else{
//             return x
//         }
//     }
// }
// console.log(add(2)(3)(4)(1)())
// function add(...arg) {
//     let sum =0
    
//        sum = arg.reduce((acc,current)=>acc+current)
    
//     return function (...arg1) {
//         if(arg1.length>0){
//             sum = sum + arg1.reduce((acc,current)=>acc+current)
//             return add(sum)
//         }else{
//             return sum
//         }
//     }
// }
// console.log(add(1)(2, 3)(4, 5, 6)())
function curry(func){
    return function curried(...args){
        if(args.length>=func.length){
            return func(...args)
        }else{
            return function(...arg1){
                return curried(...args,...arg1)
            }
        }
    }
}
function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  // Test cases
//   console.log(curriedSum(1, 2, 3)); // Output: 6
//   console.log(curriedSum(1)(2, 3)); // Output: 6
//   console.log(curriedSum(1)(2)(3)); // Output: 6

//   let filterArray = [3,4,6,8]
//    function arrayFilterReduce(arr) {
//       let res =  arr.reduce((acc,current)=>{
//             if(current>3){
//                 acc.push(current)
//             }
//             return acc
//         },[])
//         return res
//    }
//    console.log(arrayFilterReduce(filterArray))


  Array.prototype.myMap = function (callback){
    let res = []
        for(let i=0;i<this.length;i++){
           res.push(callback(this[i],i,this)) 
        }
        return res
  }
//   console.log([1,2].myMap((x)=>x*2))
  

// function missingNumber(arr) {
    
//     let totalSum = 0
//     for (let index = 0; index < arr.length; index++) {
        
//         totalSum = totalSum + arr[index]
//     }
//     sum = 0
//     for(let i = 0;i<=arr.length;i++){
//         sum = sum + i
//     }
//     console.log(sum,totalSum)
//    return sum - totalSum
   
// }
// let arrayOfMissingNumber = [0,1]
// console.log(missingNumber(arrayOfMissingNumber))

// let array = [0,-1,2,-3,1,-1] 
// let target = -2

//       function pair(arr,target){
//          let obj = {
           
//          }
//          let pair = []
//          for(let x of array){
//            if(obj.hasOwnProperty(target-x)){
//              pair.push(x,target-x)
//            }
//            obj[x] = true; 
//          }
//         console.log(obj,pair)
//       }
// console.log(pair(array,target))

// let obj = {
//  a:1,
//  b:{
//   c:2
//  }
// }
// let obj1 = clone(obj)
// obj1.b.c=3
// console.log(obj1,obj)

// function clone(){
//  let newObj = {}
//  console.log(newObj,"newObj created two times")
//  for(let key in this){
//     if(this.hasOwnProperty(key)){
//         if(typeof this[key] ==="object"){
//             newObj[key] = this[key].clone()
//         }else{
//            newObj[key] = this[key]
           
//         }
//     }
    
//  }
//  console.log(newObj,"return two times one new obj and other old obj")
//  return newObj
// }
// Object.prototype.clone = clone
//  let obj3 = obj.clone()
//  obj3.b.c=4
//  console.log(obj3,"clone obj3")

// function groupOfAnaGram(listOfAnagram){
//     let resultOfAnagram ={}
//     for(let i =0;i<listOfAnagram.length;i++){
//         let word1 = listOfAnagram[i].split('').sort().join('')
//         if(resultOfAnagram.hasOwnProperty(word1)){
//             resultOfAnagram[word1].push(listOfAnagram[i])
//         }else{
//             resultOfAnagram[word1] = [listOfAnagram[i]]
//         }
//     }
//     return resultOfAnagram
// }
// let list = ["listen", "silent", "enlist", "rat", "tar", "art", "god", "dog"]
// console.log(groupOfAnaGram(list))

// let obj = Object.create({ inheritedProp: 42 }); // Prototype object
// obj.ownProp = "Hello";

// console.log(obj.hasOwnProperty("ownProp")); // O(1) ✅
// console.log(obj.hasOwnProperty("inheritedProp")); // O(n) ❌ (has to traverse prototype chain)
// Function to add two numbers
function add(x, y) {
    console.log(x,y,"x","y")
    return x + y;
}

// Function to format a number with a "$" sign
function format(x) {
    return "$" + x;
}

// Function to get formatted sum
// function getProfit(a, b) {
//     const sum = add(a, b);
//     return format(sum); // Correctly formats the sum
// }
// function multiply(x){
//    return 2*x
// }

// // implement Function to compose two functions
// function compose(...x) {
//     return function(...arg){
//         let res
//         for(let i =x.length-1;i>=0;i--){
//             if(i==x.length-1){
//                res = x[i](...arg)
//             }else{
//                 res = x[i](res)
//             }
//         }
//         return res
//     }
// }

// // Composing `format` and `add`
// const getFormattedSum = compose(format,multiply,add);

// // Example usage
// console.log(getFormattedSum(2, 5)); // Output: "$7"
// function toSnakeCase(obj){
//     let newObj = {}
//     for(let key in obj){
//         if(typeof obj[key] !='object'){
//             let newKey = key.replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase()
//             newObj[newKey] = obj[key]
//         }else if(Array.isArray(obj[key])){
//             let newKey = key.replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase()
//             newObj[newKey] = obj[key].map((data)=>toSnakeCase(data))
//         }
//         else{
//             let newKey = key.replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase()
//             newObj[newKey] = toSnakeCase(obj[key])
//         }
//     }
//     return newObj
// }
// const input = {
//     firstName: "John",
//     lastName: "Doe",
//     newAddress: {
//       streetName: "MainStreet",
//       zipCode: 12345
//     },
//     orderHistory: [
//       { orderDate: "2024-03-15", orderAmount: 100 },
//       { orderDate: "2024-03-10", orderAmount: 200 }
//     ]
//   };
  
//   console.log(toSnakeCase(input));


// let input = [[7, 10], [2, 4]]ss

// function generateSubsets(arr) {
//     let result = [[]]; // Start with an empty subset

//     for (let i = 0; i < arr.length; i++) {
//         let currentSize = result.length; // Track the current size of result
//         console.log(currentSize,"creentSize length")
//         for (let j = 0; j < currentSize; j++) {
//             console.log(result[j])
//             result.push([...result[j], arr[i]]); // Create new subsets
//         }
//     }
// }

// console.log(generateSubsets([1, 2, 3]));


// let myPromise = new Promise((res,rej)=>{
//     for(let i =0;i<10;i++){
//         res(setTimeout(()=>console.log(i),1000))
        
//     }
// })
//  async function myFunction(){
//    let res = await myPromise
//    console.log(res)
//  }
//  myFunction()




