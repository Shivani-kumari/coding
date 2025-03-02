// const arr = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]];
// Array.prototype.myFlatArray = function () {
//     let resultArray = [];
    
//     const flattenArray = (inputArray, outputArray) => {
//         for (let i = 0; i < inputArray.length; i++) {
//             if (Array.isArray(inputArray[i])) {
//                 flattenArray(inputArray[i], outputArray); // Recursive call
//             } else {
//                 outputArray.push(inputArray[i]); // Push non-array elements
//             }
//         }
//     };

//     for (let i = 0; i < this.length; i++) {
//         if (Array.isArray(this[i])) {
//             flattenArray(this[i], resultArray);
//         } else {
//             resultArray.push(this[i]);
//         }
//     }

//     return resultArray;
// };
// what approach did i take to sloveing this problem
function productSum(array) {
    const productArray = []; // Array to store results
    for (let i = 0; i < array.length; i++) {
        let product = 1;
        // Calculate the product of all elements except the current index
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                product *= array[j];
            }
        }
        // Add the computed product to the result array
        productArray.push(product);
    }

    return productArray;
}

// Example Usage

let array = [1,2,3,4]
// console.log(productSum([4,0,4]))

// function productExceptSelf(nums) {
//     const n = nums.length;
//     const answer = []; // Initialize the output array with 1s
//     // Calculate prefix products
//     let prefix = 1;
//     for (let i = 0; i < n; i++) {
//         // Set the product of elements to the left
//         answer.push(prefix)
//         console.log(`${prefix}*${nums[i]}`)
//         prefix = prefix* nums[i]; // Update the prefix product
//     }
//     // Calculate suffix products and multiply with the current answer
//     let suffix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         answer[i] *= suffix; // Multiply with the suffix product
//         console.log(`${suffix}*${nums[i]}`)
//         suffix *= nums[i]; // Update the suffix product
//     }
//     return answer;
// }
function productExceptSelf(nums) {
    // Array to store all left multiplication
    let left = [];
    // Array to store all right multiplication
    let right = new Array(nums.length);
    left[0] = 1;
    right[nums.length - 1] = 1;
    // Fill the left array
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
        console.log(`${left[i]}=${left[i-1]}*${nums[i-1]}`)
        console.log(nums[i])
    }
    // Fill the right array
    for (let j = nums.length - 2; j >= 0; j--) {
        right[j] = right[j + 1] * nums[j + 1];
        console.log(`${right[j]}=${right[j+1]}*${right[j+1]}`)
    }
    // Calculate the final answer
    let ans = [];
    for (let k = 0; k < nums.length; k++) {
        ans[k] = left[k] * right[k];
    }
    return ans;
}

// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]

 // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]

// Example Usage
// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([4,0,4])); // Output: [0, 0, 9, 0, 0]



// function customStringReplace(stirng , replaceString, replaceWith){
//         let newSting = ""
//         newSting.substring()
//         for(let i =0;i<stirng.length;i++){
//             if(stirng.substr(i,replaceString.length)==replaceString){
//                 newSting +=replaceWith
//             }else{
//                 newSting +=stirng[i]
//             }
//         }
//         return newSting
// }
// console.log(customStringReplace("shivani","hi","a"))

// function validParthines(string) {
//     let stack = []
//     let map = {
//         "(":")",
//         "{":"}",
//         "[":"]"
//     }
//     for(let i =0;i<string.length;i++){
//         if(map.hasOwnProperty(string[i])){
//             stack.push(string[i])
           
//         }else if(map[stack[stack.length-1]]==string[i]){
//             stack.pop() 
//         }else if(stack.length==0){
//             return false
//         }
//     }
//     if(stack.length==0){
//         return true
//     }
//     console.log(stack)
//     if(stack.length>0){
//         return false
//     }

// }
// let validParenthese = "({[})]"
// console.log(validParthines(validParenthese))
function validParentheses(string) {
    let stack = [];
    let map = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (map.hasOwnProperty(char)) {
            stack.push(char); // Push opening bracket
        } else {
            // Check if stack is empty before accessing last element
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0; // If stack is empty, it's valid
}

// ✅ Test Cases
// console.log(validParentheses("()"));       // true
// console.log(validParentheses("()[]{}"));   // true
// console.log(validParentheses("(]"));       // false
// console.log(validParentheses("([)]"));     // false
// console.log(validParentheses("{[]}"));     // true
// console.log(validParentheses("((()))"));   // true
// console.log(validParentheses("({[)]}"));   // false

// 1st round - Longest substring without repeating characters, - Why we need functional component over class component - Why we need virtual dom - performance optimization - How to ensure immutability in react/redux - Create a UI with 3 boxes in a diagonal using HTML and CSS. - Next, the requirement changed; it should be diagonal but connected.

function initToRoman(num){
    const romanMap = [
        {value:1000,symbol:'M'},
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ]
    let result = ''
    for(const {value,symbol} of romanMap){
        while (num>=value) {
            result = result + symbol
            num = num -value
        }
       
    }

    return result
}
// console.log(initToRoman(1994)); // Output: "MCMXCIV"
// console.log(initToRoman(58));   // Output: "LVIII"
// console.log(initToRoman(9));    // Output: "IX"

// function romanToInt(roman){
//     const romanMap = {
//        'I': 1, 'V': 5, 'X': 10, 'L': 50, 
//         'C': 100, 'D': 500, 'M': 1000
//     }
//     let total = 0
//     for(let i =0;i<roman.length;i++){
//         let current = romanMap[roman[i]]
//         let next = romanMap[roman[i+1]]
//         console.log(current,next)
//         if(next>current){
//             total = total - current
//             console.log("inside if part total",total)
//         }else{
//             total = total + current
//             console.log(total,"total in else part")
//         }
//     }
//     return total
// }
// console.log(romanToInt("MCMXCIV"));

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// function throttledFun(func, time, context){
//     let lastTime
//     return (...args)=> {
//         if(!lastTime){
//             lastTime = Date.now()
//             func.apply(context, args)
//             // console.log("woei")
//         }
//         else {
//             // console.log("woei")
//             //  how to provide context?
//             let thisTime = Date.now()
//             // console.log(thisTime  - lastTime)
//             // be carefull don't do lastTime - thisTime 
//             if(thisTime - lastTime >= time)
//                 func.apply(context, args)
//         }
//     }
// }

// let some = throttledFun(()=> {console.log('23ji')}, 1000)
// some()
// some() // do not print 
// setTimeout( () => {
//     some()
// } , 1001)


// let arrayA =[4,7,[6,1,[5,2]]]
// let level = 1
// function wightSum(arr,depth){
//     let sum = 0
//     for(let i =0;i<arr.length;i++){
//         if(!Array.isArray(arr[i])){
//             sum = sum + arr[i]*depth
//             console.log(sum,"sum")
//         }else{
//            sum = sum + wightSum(arr[i],depth+1)
//         }
//     }   
//     return sum
// }
// console.log(wightSum(arrayA,level))

// (4∗1)+(7∗1)+(6∗2)+(1∗2)+(5∗3)+(2∗3)



// function flatten() {
//     let res = []

//     for(let i =0;i<this.length;i++){
//         if(Array.isArray(this[i])){
//             res.push(...this[i].myFlatenArray())
//         }else{
//             res.push(this[i])
//         }
//     }
//     return res
// }

// Array.prototype.myFlatenArray = flatten
// console.log(flattenArray.myFlatenArray())
let flattenArray = [4,7,[6,1,[5,2]]]
function flattenArrayusingDepth(arr,depth){
    let res = []
        for(let i =0;i<arr.length;i++){
            if(Array.isArray(arr[i]) && depth>0){
                
                res.push(...flattenArrayusingDepth(arr[i],depth-1))
            }else{
                res.push(arr[i])
            }
        }
        return res
}
console.log(flattenArrayusingDepth(flattenArray,Infinity))