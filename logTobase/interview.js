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
var twoSum = function(nums, target) {
    const map = new Map();
    // the goal is to maintain a map of [num, index] 
    // as we go and check for complementary when visiting
    // a new number in the array.
    for (const i in nums) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [i, map.get(complement)]
        }
        map.set(nums[i], i);
    }
};
// console.log(pair(arr,target))
console.log(twoSum(arr,target))
