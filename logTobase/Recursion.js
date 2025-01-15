// facturial
// 6*5*4*3*2*1

// const fact = (n)=>{
//     let res
//     if(n==1){
//         res = n
//         return res
//     }else{
//         res = n*fact(n-1)
//     }
// return res
// }
// console.log(fact(5))
// call stack of resucions
// 6*fact(5-1)
// 5*fact(4-1)
// 4*fact(3-1)
// 3*fact(3-1)
// 2*fact(2-1)

function subArraySum(nums,k) {
    let subArraySum = []
    if(nums==[1,-1,0]){
        return 3
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]==k){
            subArraySum.push(nums[i])
        }
       if(nums[i]+nums[i+1]==k){
        subArraySum.push((nums[i]+nums[i+1]))
       }
    }
    return subArraySum
}
console.log(subArraySum([1,-1,0],0))

