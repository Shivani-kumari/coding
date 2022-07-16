
// const factor = (n)=>{
//     let array =[]
// for(let i=1;i<=n/2;i++){
//     if(n%i === 0){
//         array.push(i)
//     }
// }
// let sum =0
// for(let i =0;i<array.length;i++){
//     sum +=array[i]
// }
// if(sum === n){
//     console.log("prfect Number",n)
// }else{
//     console.log("not Prfect Number",n)
// }
// }

// factor(100)

// const obj = {
//     hii:'Hello',
//     hello: console.log(this)
// }
// console.dir(obj)
// obj.hello
// let array = [10, 10, 10]

// const secondlargestArray = (arr) =>{
//     let larg = -Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>larg){
//             larg=arr[i]
//         }
//     }
//     let secon = -Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>secon && arr[i] != larg){
            
//             secon = arr[i]
//         }
//     }
    
//     return secon
// }
// console.log(secondlargestArray(array))

// Minimum sum of two numbers formed from digits of an array
// wrong solution we need to improve
// var array = [6,8,4,5,2,3]

// function minumSum (arr){
//     let g1 = ""
//     let g2 =""
//     arr.sort()
//     for(let i=0;i<arr.slice(0,3).length;i++){
//         g1 += arr[i]
//     }
//     console.log(g1)
//     for(let j=arr.slice(0,3).length;j<arr.length;j++){
//         g2 += arr[j]
//     }

//     console.log(parseInt(g1)+parseInt(g2))
// }
// minumSum(array)


// const arr = [4,3,2,7,8,2,3,1]
// var findDuplicates = function(nums) {
//     var map = new Map()
//     var arr = []
//     for(let i=0;i<nums.length;i++){
//         if(map.has(nums[i])){
//             map.get(nums[i]).push(nums[i])
//         }else{
//             map.set(nums[i],[nums[i]])
//         }
//     }
//     for(const x of map.keys()){
//         if(map.get(x).length>1){
//             arr.push(x)
//         }
//     }
//     return arr
// };
// findDuplicates(arr)

// find the unique number in the given array

// var arr = [1,1,2,2,3,4,4,5,6,6]

//  const findUniqre = (arr) =>{
//     const numbers = new Map()
//     const output = []
//     for(let i=0;i<arr.length;i++){
//         if(numbers.has(arr[i])){
//             numbers.get(arr[i]).push(arr[i])
//         }else{
//             numbers.set(arr[i],[arr[i]])
//         }
//     }
//     for(const x of numbers.keys()){
//        if( numbers.get(x).length==1){
//            output.push(x)
//        }
//     }
//     return output
//  }
//  console.log(findUniqre(arr))

// const arr= [1,2,3,4,5,6,7]

// const pair = (array) =>{
//     const res =[]
//     let k=0
//     let j=array.length-1
//     for(let i=0;i<array.length/2;i++){
//         res.push([array[i],array[j]])
//         j--
//     }
//     return res
// }
// console.log(pair(arr))

// this example of inside the arrow functions
// class Friend {
//     constructor (name){
//         this.name = name
//         this.getName = () => this.name
//     }
// }
// const myFrend = new Friend('Jordan')
// const {getName} = myFrend
// console.log(getName())


// const isNaN = function(value) {
//     const n = Number(value);
//     console.log(n)
//     return n !== n;
// };

// console.log(isNaN({}))

