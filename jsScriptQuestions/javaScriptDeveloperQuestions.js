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

function solve(L, R) {
    // You must complete the logic for the function that is provided
    // before compiling or submitting to avoid an error.

    // Write your code 
    let count1 = 0
    let count2 = 0
    for(let i =L;i>=0;i--){
        if(L + i === L || L + i === i){
            count1 ++
        }
    }
    for(let i =R;i>=0;i--){
        if(R + i === R || R + i === i){
            count2 ++
        }
    }
    return count1 + count2
}
console.log(solve(2,3))
