// let max= Math.max
// let min= Math.min
// console.log(max,min)
// console.log(max > min)
// console.log(max < min)

// Find Quotient and Remainder of two numbers without using modulus (%) and divide (/) operator. 

// Input: 14, 4
// Output: Quotient = 3, Remainder = 2

// function find(N,d) {
//     let quotient =0
//     while (N-d>=0) {
//        quotient++
//        N = N-d
//     }
//     console.log(N, quotient)
// }
// console.log(find(10,10))

// var a=/x/y 
// b = new RegExp(a,"g")
// console.log(a.test("xy"))
// console.log(b.test("xy"))
// console.log(a.test("XY"))
// console.log(b.test("XY"))

// function solve(L, R) {
//     // You must complete the logic for the function that is provided
//     // before compiling or submitting to avoid an error.

//     // Write your code 
//     let count1 = 0
//     let count2 = 0
//     for(let i =L;i>=0;i--){
//         if(L + i === L || L + i === i){
//             count1 ++
//         }
//     }
//     for(let i =R;i>=0;i--){
//         if(R + i === R || R + i === i){
//             count2 ++
//         }
//     }
//     return count1 + count2
// }
// console.log(solve(2,3))

// (function (a) {
//     return (function (){
//         console.log(a)
//         a = 6
//     })()
// })(21)
// find the sum of n consutive of array

// let arr = [1,2,3,4,2,1,1,2,3,3,4,2,1,3,3,4,3,2,1,1]
// function sumOfLarge(arr,num = 4) {
//     let maxSum =0
//     for(let i =0;i<arr.length-num+1;i++){
//         let sum = 0
//         for(let j=0;j<num;j++){
//             sum +=arr[i+j]
//         }
//         if(sum>maxSum){
//             maxSum = sum
//         }
//     }
//     return maxSum
// }
// console.log(sumOfLarge(arr))

// find unque number 
// let arr = [1,1,2,2,2,4,4,5,6,7,8,8]

// function findUniqueNumber(arr) {
//     let map = new Map()
//     let res = []
//     for(let i =0;i<arr.length;i++){
//         if(map.has(arr[i])){
//             continue
//         }else{
//             res.push(arr[i])
//             map.set(arr[i],1)
//         }
//     }
//     return res
// }
// console.log(findUniqueNumber(arr))
// let arr1 = [1,2,3] ,arr2 = [1,4,9]

// let isSquareCheck = (arr1,arr2) =>  arr1.every(arr => arr2.includes(arr * arr))
// console.log(isSquareCheck(arr1,arr2))

// find the maximum occuring character in given string

// let str = "Hello World"

// function findMaxStr(str) {
    
//     let newString = str.replace(/ /g,'')
// let obj = {}
//     for(let i =0;i<newString.length;i++){
//         if(obj.hasOwnProperty(str[i])){

//         }else{

//         }
//     }
    
   
//     console.log()
// }
// console.log(findMaxStr(str))
setTimeout(()=>{
console.log("setTimeout")
},0)
 let myPromice = new Promise(function (reslove,rejet) {
     
    
    console.log("hillo")

 })
 myPromice.then((res)=> setTimeout(()=>console.log(res),0))
 console.log("End")