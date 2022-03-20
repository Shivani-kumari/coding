// let searchInsertPosition = (arr,key)=>{
    
//     let start =0
//     let end = arr.length-1
//     let mid =0
//     while (start<=end) {
//         mid = Math.floor((start + end)/2)
//         console.log(arr[mid])
//         if(arr[mid]==key ){
//             console.log(mid,"hello")
//             return mid
//         }
//         if(arr[mid]>key ){
//             end = mid-1
//             console.log(end,"end")
//         }else{
//             start = mid +1
//             console.log(start,"start")
//         }
//     }
//     return end +1
// }

// let array = [5,10,24,30,50,100]
// let a = [4,2,4,6,8]
// let b = [4,11,22,33,44]
// let c= [4,25,50,75,100]
// let d= [6,2,4,6,8,10,12]
// let f=[14,17,25,26,32]
// let g = [6,2,4,6,8,10,12]
// let key = 35

// console.log(searchInsertPosition(array,key))

//squrt(x) using binary search
// root 16 = 4

// const squrtRoot = (n)=>{
//         let start,end,mid
//         start = 1
//         end = Math.floor(n/2)
//         console.log(end,"end")
//         if(n<2){
//             return n
//         }
//         while (start<=end) {
//             mid = Math.floor((start + end)/2)
//             console.log(mid,"mid")
//             if(mid*mid == n){
//                 return mid
//             }else if(mid*mid<n){
//                 start = mid + 1
//                 console.log(start,"start")
//             } else if(mid*mid>n){
//                 end = mid-1
//                 console.log(end,'end1')
//             }
//         }
//         console.log(end,"final")
//         return end
// }
// console.log(squrtRoot(11))
// 1,2,3,4,5


