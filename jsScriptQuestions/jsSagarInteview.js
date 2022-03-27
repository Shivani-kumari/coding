// flatten array and object
// arr2 = [0, 1, 2, [[[3, 4]]]]
// arr = [1, 2, [3, 4, [5, 6]]]
// const arr2 = [0, 1, 2, [[[3, 4]]]]
// [1, 2, 3, [4, 5, [6, 7]]]
// const res = []

// const flattenArray = (arr)=>{
    
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             flattenArray(arr[i])
//         }else{
//             res.push(arr[i])
//         }
//     }
// }

// flattenArray(arr2)
// console.log(res)

// const objk = {
//     name: "test",
//     address: {
//         personal: "abc",
//         office: {
//             building: 'random',
//             street: 'some street'
//         }
//     },
// }
// const res ={

// }

// const flattenObject = (obj)=>{
    
//    let keysArray = Object.keys(obj)
//    for(let i=0;i<keysArray.length;i++){
//        if(typeof obj[keysArray[i]] === 'object'){
//            flattenObject(obj[keysArray[i]])
//        }else{
//             console.log(a)
//             console.log(obj[keysArray[i]])
//         res[keysArray[i]] = obj[keysArray[i]]
//        }
       
       
//    }
// }
// flattenObject(objk)
// console.log(res)
// console.log(typeof objk["address"] === 'object')

// closer in javaScript

// function createSum(){
//     let sum =0
//     function allSum (num){
//         sum +=num
//       return sum
//     }
    
//     return allSum
    
//     }
//     const sum = createSum();
//     const sum2 = createSum()
    
    
    
    
//     console.log(sum2(5))
//     console.log(sum2(3))
//     console.log(sum2(4))
//     console.log(sum2(0))
//     console.log(sum2(1))

// Array protoType Questions

// Array.prototype.sum = function (n){
//     let arr =[]
//         for(let i =0;i<this.length;i++){
//       arr[i]=this[i]+n
//       }
      
//       return arr
//     }
    
//     Array.prototype.multiply = function (n){
//     let arr =[]
//         for(let i =0;i<this.length;i++){
//       arr[i]=this[i]*n
//       }
      
//       return arr
//     }
    
    
//     let arr = [1, 2, 3];
//     let newArr = arr.sum(2).multiply(2); // [6,8,10];
    
//     console.log(newArr)
//     console.log(arr)

// Write a function that accepts two arguments. An Integer N and 
// a string. Divide the string into N equal parts. If the string length isn't 
// divisible by N, the last substring may be smaller.

// Example input: 3, ‘ABCDEF’
// Output: [“AB”, “CD”, “EF”]

// Example input: 3, ‘0123456789’
// Output: [“0123”, “4567”, “89”]
let str ="shfi"
str.split('')
str.substring


const rest = (N, Str) => {
    let l
    if (Str.length % N==0) {
        l = Str.length / N
    } else {
        l = Math.floor((Str.length / N) + 1)
        
    }
    // let array = Str.split('')
    let res = []
    console.log(l)
    for (let i = 0; i < Str.length; i = i + l) {
        res.push(Str.substring(i, l+i))

    }

    return res
}
    

console.log(rest(3,"0123456789"))