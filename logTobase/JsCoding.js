// let input = 'abc'
// output =["abc","acb","bac","bca","cab","cba"]
// P(n, r) = n(n-1)(n-2)


// const permutations = (elements) =>{
    
//     if(elements.length === 0) return [[]]
//     const firstEl = elements[0]
//     console.log(firstEl,"firstEl")
//     const rest = elements.slice(1)
//     console.log(rest,"rest")
//     const permsWithoutFirst = permutations(rest)
//     const allPermutations = [];
//     console.log(permsWithoutFirst,"permsWithoutFirst")
//     permsWithoutFirst.forEach(perm =>{
//         for(let i=0;i<=perm.length;i++){
//             const permWithFirst = [...perm.slice(0,i),firstEl,...perm.slice(i)]
//             allPermutations.push(permWithFirst)
//         }
//     })
//     return allPermutations
// }
// console.log(permutations(['a','b','c']))



// Reducer example
// const users = [
//     {firstName:'akshay',lastName:'saini',age:26},
//     {firstName:'donald',lastName:'trump',age:75},
//     {firstName:'elon',lastName:'musk',age:50},
//     {firstName:'Adi',lastName:'keshav',age:26}
// ]

// const outPut = users.reduce(function (acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=++acc[curr.age]

//     }else{
//         acc[curr.age] = 1 // for this way we can add the new property and value
//     }
//     return acc
// },{})

// const output1 = users.reduce(function(acc,current){
//     if(current.age<30 ){
//         console.log(current.firstName)
//         acc[current.firstName] = current.age
//     }
   
// return acc
// },{})
// console.log(output1)
// most important
// var a = 2
// function any() {
//     console.log(a)
// }

// function shiv() {
//     var a = 1
//     any()
// }
// shiv()

//  inside setTimout this will refers to windio object

// let obj ={
//     firstName:'Shivani',
//     call: function helo() {
//         setTimeout(()=>{
//             console.log(this.firstName)
//         },100)
//     },
//     anotherCall: function anot() {
//         console.log(this.firstName,"anotherCall")
//     },
//   // "a":  setTimeout(function() {
//   //     console.log(this,"checking")
//   //   }, 100)
// }
// obj.call()
// obj.anotherCall()



// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// function foo() {
//   setTimeout(()=>
//   {console.log(a)
//   console.log(b)}
//  , 100 )
// var a = 2
// let b = 12
// }
// foo()

// let obj = {
//   b:1,
//   a : function (){
// setTimeout( function(){
//   console.log(this.b)
// })
//   },
//   c: function (){
//     return function (){
//       console.log("hello")
//     }
//   }
// }
// let call = obj.c()
// call()
// obj.a()
// let a = 5
// function experiment() {
  
//   setTimeout(()=>{
//       console.log(a)
//   },100)
//   let a = 10
// }
// experiment()

// "5431"->13->4

// function sumOfStringNumber(str) {
//   let newStr = str
//   let res = 0
//   while(newStr.length>1){
//   let array =   newStr.split('')
//    res =  array.reduce(
//     (previousValue, currentValue) => previousValue + parseInt(currentValue),
//     0
//   )

//     newStr = res + ""
//   }
//   return res

// }

// console.log(sumOfStringNumber("5431"))

// console.log(sum(3,2))  // 5
// console.log(sum(3)(2)) // 5

// function sum(a,b) {
//   if(b){
//     return a + b
//   }else{
//     return (c)=>{
//         return  a + c
//     }
//   }
// }

// Replace all dupilicate array with -1

// let array = [1,2,3,4,5,3,4,5,6,7,8,1]

// function rep(arr) {
//     let obj = {}
//     let res = []
//     for(let i =0;i<array.length;i++){
//         if(obj.hasOwnProperty(array[i])){
//             res.push(-1)
//         }else{
//             obj[arr[i]] = i
//         res.push(arr[i])
//         }
//     }
//     return res
// }

// console.log(rep(array))


// const nums1 = [2,5,1,3,4,7], n = 3

// // const outPut = [2,3,5,4,1,7]

// function shuffler(arr1,n) {
//    let j = n
//     let outPut = []
//     for(let i =0;i<n;i++){
//         outPut.push(arr1[i],arr1[j])
//         j++
//     }
//     return outPut
// }
// console.log(shuffler(nums1,n))
// let nums = [1,2,3,1,1,3]
// function goodPairs(arr) {
//     let count =0
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 count++
//             }
//         }
//     }
//     return count
// }
// console.log(goodPairs(nums))
// let nums = [1,2,3,1,1,3]

// function numIdenticalPairs(nums) {
//     let sum = 0;
//     let numMap = {};
    
//     nums.forEach((num) => {
//         if((num in numMap)){
//             numMap[num]++;
//             sum += numMap[num];
            
//         } else {
//             numMap[num] = 0; 
//         }
//     });
    
//     return sum;
// };
// console.log(numIdenticalPairs(nums))

// function splitString(s) {
//     let outPutArray = []

// let ArrayOfString = s.split('')
// let count
//     for(let i=0;i<s.length;i=i+count){
//         console.log(count)
//  count = 1                             
// let prvString = ArrayOfString[i]
//         for(let j =i+1;j<s.length;j++){
//             count++
//             if(prvString!==ArrayOfString[j] && count%2==0){
//               let subSting =  s.substring(i,j+1)
//                     outPutArray.push(subSting)
//                     break
//             }
//         }
//     }
//     return outPutArray
// }
// console.log(splitString("abaabbabba"))

// output = ab,aabb,ab,ba
// div, p
// div p
// div ~ p
// div + p
// div > p
// div, p
// div p
// div ~ p
// div + p
// div > p

/**
 * Given an array [“123f”, “1dsa12”, “1212ds”, “65fd”, “sadfa”, “asdasd”]
 * Each item can contain 0-9, a-z, A-Z where a-z, A-Z characters are unwanted
 * Sum of all the numbers after removing all the unwanted characters 123+112+1212+65
**/



// const sumArr = (arr) => {
//     let sum = 0
//     for(let i =0;i<arr.length;i++){
//       let newArray =  getNumber(arr[i])
//       if(parseInt(newArray)){
//         let number = newArray.join('')

//         sum += parseInt(number)
//       }
      
     
//     }
//     return sum
// };


// function getNumber(s) {
//    const stringArray = s.split('')
//    const arrayNumber = stringArray.filter((n)=> parseInt(n))
// // console.log(arrayNumber)
// return arrayNumber
// }


// console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
// console.log(sumArr(["asdasd"])); // 0
// console.log(sumArr(["asdasd12"])); // 12
// console.log(sumArr(["12"])); // 12

// time complexity is o(n*m)

// function makeFileUinque(names) {
//     let map = new Map();
//     for (let i = 0; i < names.length; i++) {
//       if (map.has(names[i])) {
//         // console.log(true)
//         for (let j = 1;j < 3000; j++) {
//           let newString = names[i] + `(${j})`;
          
//           if (!names.includes(newString) && !map.has(newString) ) {
           
//             map.set(newString,i)
//             break;
//           }
//         }
//       } else {
//         map.set(names[i], i);
//       }
//     }
    // for(let x in map){
    //     let set = new Set(names)
  
    //     if(map[x]>1){
    //         while(map[x]-1>0){
    //             for(let i=1;i<3000;i++){
    //                let newString = x + `(${i})`
  
    //                 if(!Array.from(set).includes(newString)){
    //                     names.push(newString)
    //                     break
    //                 }
    //             }
    //             map[x]--
    //         }
    //     }
  
    // }
  //   let res = []
  //   map.forEach((value,key)=>{
  //     res.push(key)
  //   })
  
  //   return res;
  // }
  // console.log(
  //   makeFileUinque([
  //     "wano","wano","wano","wano"
  //   ])
  // );
  