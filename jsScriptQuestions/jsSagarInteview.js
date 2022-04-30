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
//    function allSum (num){
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
//     console.log(sum(1))

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
// let str ="shfi"
// str.split('')
// str.substring


// const rest = (N, Str) => {
//     let l
//     if (Str.length % N==0) {
//         l = Str.length / N
//     } else {
//         l = Math.floor((Str.length / N) + 1)
        
//     }
//     // let array = Str.split('')
//     let res = []
//     console.log(l)
//     for (let i = 0; i < Str.length; i = i + l) {
//         res.push(Str.substring(i, l+i))

//     }

//     return res
// }
    

// console.log(rest(3,"0123456789"))

// find anaGram silent and silent
 // anagram prictice again
// function anagram(s,t) {
//     const letters = {};
//     if (s.length !== t.length) return false;
    
//     for (let char of s) {
//         if (letters[char]) {
//             console.log(letters[char])
//             letters[char]++;
            
//         } else {
//             letters[char] = 1;
//         }
//     }
//     console.log(letters,"laters")

//     for (let char of t) {
//         if (letters[char] ) {
//             letters[char]--;
//             console.log(letters,"dec")
//         } else {
//             return false;
//         }
//     }

//     return true;
// }
// const CHAR = 256
// function anagram(s,t) {
//     const charArr = new Array(CHAR).fill(0)
//     if(s.length !== t.length){
//         return false
//     }
//     for(let i=0;i<s.length;i++){
       
//         charArr[s.charCodeAt(i)]++
//         console.log( charArr[s.charCodeAt(i)],s.charCodeAt(i),t.charCodeAt(i))
//         charArr[t.charCodeAt(i)]--
//         console.log( charArr[t.charCodeAt(i)],t.charCodeAt(i),s.charCodeAt(i))
      
//     }
//     for(let i=0;i<CHAR;i++){
        
//         if(charArr[i] !==0) return false
//     }
//     return true
// }
// console.log(anagram("abc",'bac'))


// find the frequency of the character in string 
// example str = "aabb" outpu a:2 and b:2

// function freq(str){
//     let array = []
//         let strArray = str.split('')
//       let map = new Map()
//       for(let i=0;i<strArray.length;i++){
//       if(map.has(strArray[i])){
//       map.get(strArray[i]).push(strArray[i])
//       }else {
//       map.set(strArray[i],[strArray[i]])
//       }
//       }
//       map.forEach((value,key )=>{
//       let obj = {}
//       obj[key] = value.length
//       console.log(key)
//       array.push(obj)
//       })
//       return array
//     }
//     let str = "aa"
//     let s = "aab"
//     console.log(freq(s))

// another way to to find the frequency of character

// function freq(str){
    
//       let strArray = str.split('')
//       let map = new Map()
//       for(let i=0;i<strArray.length;i++){
//       if(map.has(strArray[i])){
//       map.set(strArray[i],map.get(strArray[i])+1)
//       }else {
//       map.set(strArray[i],1)
//       }
      
//       }
      
//     return  Array.from(map)
      
     
//     }
   
    
    // function freqChar(str) {
    //     let obj = {}
        
    //     for(let i=0;i<str.length;i++){
    //         if(obj.hasOwnProperty(str[i])){
    //             obj[str[i]] +=1 
    //         }else{
    //             obj[str[i]] = 1
    //         }
    //     }
    //     console.log(obj)
    // }
    // freqChar('aabbabc')

//     var frequecySort = function (s){
//         let obj = {}
        
//         for(let i=0;i<s.length;i++){
//             if(obj.hasOwnProperty(s[i])){
//                 obj[s[i]] +=1 
//             }else{
//                 obj[s[i]] = 1
//             }
//         }
//         let result = []
//         let entries = Object.entries(obj);
//         console.log(entries)
//         let sorted = entries.sort((a, b) => -(a[1] - b[1]));
//         sorted.forEach((value)=>{
//             while(value[1]>0){
//                      result.push(value[0]) 
//                 value[1]--
//             }
//         })
//        return result.join('')
//     }

// let s = "tree"
// console.log(frequecySort(s))

// return true if occurrences of element in the array is unique if not return false
// example let a = [1,1,1,2,2,3] this is return true

// function occurrences(arr) {
//     let obj = {}
//     for(let i =0;i<arr.length;i++){
//         if(obj.hasOwnProperty(arr[i])){
//             obj[arr[i]]++
//         }else{
//             obj[arr[i]] = 1
//         }
//     }
//     let obj2 = {}
//     for(x in obj){
//         if(obj2.hasOwnProperty(obj[x])){
//             return false
//         }else{
//             obj2[obj[x]] = 1
//         }
//     }
// return true
// }