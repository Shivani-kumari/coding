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

// Peak index in a Mountain array

// let arr = [7 ,15, 21 ,30 ,35 ,26 ,17 ,10]
// let arr = [8 ,8, 12, 76, 65, 58, 34 ,22 ]

// let arr = [6 ,10 ,11, 12 ,13, 14 ,1]

// function peakIndex(arr) {
//      let start = 0
//      let end = arr.length-1
//      let mid 
//      while (start<=end) {
//         mid = Math.floor((start + end)/2)
//         if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
//             return mid
//         }else if(arr[mid]<arr[mid+1]){
//             start = mid +1
//         }else{
//             end = mid-1
//         }
//      }
//      return mid
// }
// console.log(peakIndex(arr))

// let qarray = [9 ,2 ,3, 3, 4 ,4, 4, 5, 5 ,6]
//    let key = 4 

// let qarray = [5, 0 ,0 ,4, 7 ,7]
// let key = 0

// let qarray = [6 ,6 ,6, 6 ,6 ,6, 6]
// let key = 6

// let qarray = [8, 10 ,11, 11 ,12 ,14 ,14 ,14, 14]
// let key =14

// function findFirstAndOccurrence(arr,key) {
//     let start =0;
//     let end = arr.length - 1
//     let mid = null
//     while(start<=end){
//         mid = Math.ceil((start + end)/2)
//         if(key==arr[mid] && key !== arr[mid-1]){
//             return mid
//         }else if(key>arr[mid]){
//             start = mid + 1
//         }else{
//             end = mid-1
//         }
//     }


// }

// function findFirstAndLastOccurrence(arr,key) {
//     let first = findFirstAndOccurrence(arr,key)
//     let last 
//     for(let i=first;i<=arr.length;i++){
//         if(arr[i]!=key){
//             last = i
//             break
//         }
//     }
//     console.log(first,last-1)
//  // here we can search last index using binary search
// }
// console.log(findFirstAndLastOccurrence(qarray,key))

function firstOccurence(arr,key){
    let start = 0
    let last = arr.length-1
    let mid = null
    while (start<=last) {
        mid = Math.ceil((start + last)/2)
        if(key==arr[mid] && key !== arr[mid-1]){
            return mid
        }else if(key>arr[mid]){
            start = mid + 1
        }else if(key<arr[mid]){
            last = mid - 1
        }else if(key == arr[mid-1] && key == arr[mid+1]){
            last = mid -1
        }
    }
}

// function numberOfOccurrencesElement(arr,key) {
//     let first = firstOccurence(arr,key)
//     console.log(first)
//     let start = first
//     let end = arr.length -1
//     let mid = null
//     while (start<=end) {
//         mid = Math.ceil((start + end)/2)
//         // console.log(mid)
//         if(arr[mid]>key){
//             end = mid-1
//         }else if(key==arr[mid] && arr[mid+1]!==key){
//             return mid
//         }
//     }
    // console.log(mid)
// }

// let arr = [9, 2, 3 ,3, 4, 4 ,4 ,5 ,5 ,6]
// let arr = [5 ,0, 0 ,4, 7, 7]
// let key = 0
// let key = 4
// console.log(Math.floor(13/2))

// console.log(numberOfOccurrencesElement(arr,key))
// let arr = [10,20,30,50]
// let target = 40
// function findIndexOfInsertElement(arr,target) {
//     let start = 0
//     let end = arr.length 
//     while (start<=end) {
//        let mid = Math.floor((start + end)/2)
//        console.log(mid,"mid")
//         if(target<arr[mid+1] && target>arr[mid-1]){
//             console.log(mid + 1,"ans")
//             return mid+1 
//         }else if(arr[mid]>target){
// start = mid + 1
// console.log(start,"start")
//         }else{
//             end = mid-1
//             console.log(end,"end")
//         }
//     }
    
// }
// console.log(findIndexOfInsertElement(arr,target))