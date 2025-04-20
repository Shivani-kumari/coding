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


let array = [1,2,3,4]

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
// function replaceVowel(str){
    
//     let mapOFVowel = {
//         a:'',
//         o:'',
//         u:'',
//         e:'',
//         i:'',
//         A:'',
//         I:'',
//         O:'',
//         U:'',
//         E:''
//     }
//     let newSting = ''

//     for(let i =0;i<str.length;i++){
//         if(mapOFVowel.hasOwnProperty(str[i])){
//             continue
//         }else{
//             newSting = newSting + str[i]
//         }
//     }
//     return newSting
// }
// console.log(replaceVowel('Shivani'))

// function maxSumArray(arr){
//     let ArrayOfArray = []
//     for(let i =0;i<arr.length;i++){
//         for(let j=i;j<=arr.length;j++){
//             ArrayOfArray.push(arr.slice(i,j))
//         }
//     }
//     let maxSum = -Infinity
//     for(let i =0;i<ArrayOfArray.length;i++){
//         let sum = ArrayOfArray[i].length && ArrayOfArray[i].reduce((acc,current)=>acc + current)
//         if(maxSum<sum){
//             maxSum = sum
//         }
//     }
//     return maxSum
// }
// function maxSumArray(arr){
//     let currenSum = arr[0]
//    let  maxSum = arr[0]
//     for(let i =1;i<arr.length;i++){
//         currenSum = Math.max(arr[i],currenSum + arr[i])
//         maxSum = Math.max(maxSum,currenSum)
//     }
//     return maxSum
    
// }
// console.log(maxSumArray([-2,1,-3,4,-1,2,1,-5,4]))

function curry(fun){
   let array = []
    return function curredSum(...arg){
         array = [...array,...arg]
         console.log(array)
        if(array.length>=3){
            let [a,b,c] = array
            array = []
            return fun(a,b,c)
        }else{
            return curredSum
        }  
    }
}

function sum(a, b, c) {
    return a + b + c;
  }
  let curriedSum = curry(sum);
//  console.log(curriedSum(1, 2, 3)); // Output: 6
// console.log(curriedSum(1)(2, 3)); // Output: 6
// console.log(curriedSum(1)(2)(3)); // Output: 6
//  let Calculator ={
//     a:this,
//      output :0,
     
//     add: function(a){
//         this.output = a
//         return this
//     },
//     multiply:function(b){
//         this.output= this.output*b
//         return this
//     },
//     subtract:function(c){
//         this.output = this.output -c
//         return this
//     },
//     display:function(){
//            let res = this.output 
//            this.output =0
//         return res
//     }
// }
// console.log(Calculator.add(10).display()); // Output: Current result: 10
// console.log(Calculator.add(5).multiply(2).subtract(3).divide(2).display());
// console.log(Calculator.subtract(5).multiply(3).display())
// Function.prototype.myCall = function (obj={},...arg){
//     if(typeof this != 'function'){
//         throw new Error('not callable')
//     }
   
//    obj.fun = this
   
//    obj.fun(...arg)
// }
// Function.prototype.myApply = function(obj = {},...arg){
//     if(typeof this != 'function'){
//         throw new Error('not callable')
//     }
//     if(!Array.isArray(...arg)){
//         throw new Error("not array")
//     }
//     obj.fun = this
//     obj.fun(...arg[0])
// }
// Function.prototype.myBind = function(obj = {},...arg1){
//     obj.fun = this
//     return function(...arg){
//         obj.fun(...arg,...arg1)
//     }
// }

// let personName1 = {
//     person:'shivani'
// }
// let personName2 = {
//     person:'Raman'
// }
// function printAge(age){
//     console.log(`${this.person} is ${age} years old`)
// }
// function information(age,company){
//     console.log(`${this.person} is ${age} and company ${company}`)
// }
// printAge.myCall(personName1,27)
// information.myApply(personName2,[26,"jumio"])
// let anotherFun = information.myBind(personName2)
// anotherFun(26,'delhivery')

const p1 = Promise.resolve("Success 1")
const p2 = new Promise((res,rej)=>setTimeout(() => {
     rej("Error 2")
}, 1000))
const p3 = Promise.resolve("Success 3")

Promise.myAll = function (promises){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            return reject(new TypeError("argument must be an array"))
        }
        let results = []
        let completed = 0
        let total = promises.length
        if(total==0){
            resolve([])
        }
         promises.forEach((promise,index)=>{
            Promise.resolve(promise)
            .then(value=>{
                results[index] = value
                completed++
                if(completed===total){
                    resolve(results)
                }
            }).catch(error => reject(error))
         })
    })
}

Promise.myAll([p1,p2,p3]).then(result=>console.log("results",result)).catch(err=>console.log("rejected due to",err))
