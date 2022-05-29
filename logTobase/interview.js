// let arr = [100,200,300,400]
// let k = 2
// let a = [1,4,2,10,23,3,1,0,4]
// let n = 4
// let ar = [2,3]
// let g = 3

// const contigousSubarays = (array,key) =>{
//     let subArray =[]
//     for(let i=0;i<=array.length-key;i++){
//         let sub = []
//         for(let j=i;j<key+i;j++){
//             sub.push(array[j])
//         }
//         subArray.push(sub)
//     }
//     let sum =0
//     subArray.forEach((value)=>{
//       let single =  value.reduce((total,current)=>total+current)
//       if(sum<single){
//           sum=single
//       }
//     })

//     return {subArray,sum}
// }
// console.log(contigousSubarays(a,n))
// Write a function that accepts two arguments. An Integer N and 
// a string. Divide the string into N equal parts. If the string length isn't 
// divisible by N, the last substring may be smaller.

// Example input: 3, ‘ABCDEF’
// Output: [“AB”, “CD”, “EF”]

// Example input: 3, ‘0123456789’
// Output: [“0123”, “4567”, “89”]



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

// Pair with Targent Sum

// let arr = [1,5,10,20,80]
// target = 90

// let arr = [1,5,10,20,80]
// target = 40

// let arr = [-2,-1,5,13,17,25,40]
// target = -3

// let arr = [-2,-1,5,13,17,25,40]
// target = 100

// let arr = [-2,-1,5,13,17,25,40]
// let target = 39

// const pair = (arr,tar) =>{
//     let j =arr.length-1
//     let i =0
//     while (i<j || arr[i]>tar) {
//         if(arr[j]>tar && j>=1){
            
//             j--
//             console.log(j,"j")
//         }else if(arr[j]+arr[i]==tar){
//             return [arr[j],arr[i]]
//         }else{
            
//             i++
           
//         }
//     }
    

// }
// var twoSum = function(nums, target) {
//     const map = new Map();
//     // the goal is to maintain a map of [num, index] 
//     // as we go and check for complementary when visiting
//     // a new number in the array.
//     for (const i in nums) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [i, map.get(complement)]
//         }
//         map.set(nums[i], i);
//     }
// };
// // console.log(pair(arr,target))
// console.log(twoSum(arr,target))

// Remove all occurrences of an element from Array

// let array = [10,30,40,10,10]
// let outPut =2
// function removeRepatedElement(arr) {
//     let map = new Map()
//     for(let i =0;i<arr.length;i++){
//         if(map.has(arr[i])){
//             map.get(arr[i]).push(arr[i])
//         }else{
//             map.set(arr[i],[arr[i]])
//         }
//     }
//     let k =0
//     map.forEach(value =>{
//         if(value.length==1){
//             arr[k]=value[0]
//             k++
//         }
//     })
//     for(let j=arr.length-1;j>=k;j--){
        
//         arr.pop(j)
//     }
//     console.log(arr)
// }

// removeRepatedElement(array)

// moves all zero to the end

// function AllZero(arr) {

//     let map = new Map()
//     for (let index = 0; index < arr.length; index++) {
//         if(map.has(arr[index])){
//             map.get(arr[index]).push(arr[index])
//         }else{
//             map.set(arr[index],[arr[index]])
//         }
//     }
// let newArray = []
//     let arrayZero = []
//     map.forEach(vlues =>{
//         if(vlues[0]==0){
//             arrayZero=vlues
//         }else{
//             vlues.forEach(v=>{
//                 newArray.push(v)
//             })
//         }
//     })
//     for(let i=0;i<arrayZero.length;i++){
//         newArray.push(arrayZero[i])
//     }
//     return newArray
// }
// let array = [1 ,0, 1, 0 ,1 ,1]
// function AllZero(arr) {
//     let last = 0
//     for (let index = 0; index < array.length; index++) {
//        if(arr[index]!=0){
//           let temp = arr[last]
//         arr[last]=arr[index]
//         arr[index]=temp
//         last++
//        }
        
//     }
//     return arr
// }
// console.log(AllZero(array))

// function isHappyNumber(n) {
   
// function isHappyNumber(n) {
//    let map = new Map()
//    let check =n
//    while (!map.has(check) ) {
//       let stringNum  = check + ""
//       let stringArray = stringNum.split('')
//       let res =0
//       for(let i =0;i<stringArray.length;i++){
//           res += stringArray[i]*stringArray[i]
//       }
     
//       map.set(check,check)
//       check= res
//    }
//    if(check==1){
//       console.log("happy number",n)
//    }else{
//       console.log("not Happy number",n)
//    }
//    console.log(map)
// }
// }
// isHappyNumber(19)

// my second solution
// var isHappy = function(n) {
//    let array = [n]
//   let check =n
//   let arrayLength = []
//   while (arrayLength.length!==2 ) {
//      let stringNum  = check + ""
//      let stringArray = stringNum.split('')
//      let res =0
//      for(let i =0;i<stringArray.length;i++){
//          res += stringArray[i]*stringArray[i]
//      }
//      check = res
//      array.push(check)
//     arrayLength = array.filter((value)=>check == value)
//   }
//   if(check==1){
//   return true
//   }else{
//      return false
//   }
  
   
// };

/** Write a function that checks whether the string is valid.
* String is valid when all characters of the string appear at the same number of times, removal of 1 character is allowed to make the string valid
* For e.g abcabd is invalid because we will have to remove c and d to make it valid but we can only remove one character
* For e.g ababcc is valid since all the characters are apearing at the same number of times
* For e.g aabbccbb is invalid becuase we can remove only one b but we need to remove two b in order to make it valid
**/

function validateString(str) {
    let obj = {}
    for(let i=0;i<str.length;i++){
        if(obj.hasOwnProperty(str[i])){
            obj[str[i]]++
        }else{
            obj[str[i]] = 1
        }
       
    }

    let check = []
    
    for(let n in obj){
        check.push(obj[n])
        
    }
    let maxFreq = 0
    let objFreq = {}

    for(let i =0;i<check.length;i++){
        if(objFreq.hasOwnProperty(check[i])){
            objFreq[check[i]]++
        }else{
            objFreq[check[i]] = 1
        }
    }
    // console.log(obj,"obj")
    for(let mostFeq in objFreq){
        if(objFreq[mostFeq]>maxFreq){
            maxFreq = mostFeq
        }
    }
    console.log(check,"check",maxFreq)
    let flag = true
    let once = true

    if(check.length==2){
        return 1
    }
    for(let j=0;j<check.length;j++){
        
        if(check[j] != maxFreq  ){
            // console.log(check[j],maxFreq)
            if(once){
                // console.log(check[j])
                if(check[j]-1 != maxFreq && check[j]-1 != 0 ){
                    return false
                }
                once = false
            }else if(once == false){
                // console.log(check[j])
                return false
            }
            
           
        }
    }

    return flag
    
}

console.log(validateString('aaaaaaaaaaaaaaabaaaaaaaaaaaaa')); // true
console.log(validateString('ab8abd')); // false
console.log(validateString('$b$bcc')); // true
console.log(validateString('#b#bccbb')); // false
console.log(validateString('aabb55bbbbb')); // false
console.log(validateString('aabb9dd')); // true
