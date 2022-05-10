// Group of Aanrgams


// function groupOfAnargams(arr) {
//     let map = new Map()
//     let res = []
//         for(let j=0;j<arr.length;j++){
//             let anotherStringArray = arr[j].split('')
//             anotherStringArray.sort()
//             let res = anotherStringArray.toString()
//             if(map.has(res)){
//                 map.get(res).push(arr[j])
//             }else{
//                 map.set(res,[arr[j]])
//             }
//         }
//        map.forEach((el)=>{
//            res.push(el)
//        }) 
//        console.log(res)
    
// }
// let arr = ["eat","tea","tan","ate","nat","bat"]
// groupOfAnargams(arr)

// function groupOfAnargams(arr) {
//    let obj = {}
//     let res = []
//         for(let j=0;j<arr.length;j++){
//             let anotherStringArray = arr[j].split('')
//             anotherStringArray.sort()
//             let res = anotherStringArray.toString()
//             if(obj.hasOwnProperty(res)){
//                 obj[res].push(arr[j])
//             }else{
//                 obj[res] = [arr[j]]
//             }
//         }
//     for(i in obj){
//         res.push(obj[i])
//     }
//        console.log(res)
    
// }
// let arr = ["eat","tea","tan","ate","nat","bat"]
// groupOfAnargams(arr)


// const nums1 = [1,2,2,1]
// const  nums2 = [2,2]

// function intersectionOfArrays(a,b) {
//     let set = new Set()
//     let set2 = new Set()
//     let res = []
//     for (let index = 0; index < a.length; index++) {

//         set.add(a[index])
//     }
//     for (let index = 0; index < b.length; index++) {
//         set2.add(b[index])
        
//     }

// for (let item of set) {
   
//     if(set2.has(item)){
       
//         res.push(item)
//     }
   
// }
//   return res 
    
// }
// console.log(intersectionOfArrays(nums1,nums2))

function majorityElement(nums) {

    let numberOfTimes = Math.floor(nums.length/3)
    let map = new Map()
    let res = []
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }
    console.log(map,"numberOfTimes",numberOfTimes)
    map.forEach((value,key)=>{
        if(value>numberOfTimes){
            res.push(key)
        }
    })
    return res
}
const nums = [1]
console.log(majorityElement(nums))


