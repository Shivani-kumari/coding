

// function groupBy(objects, key) {
//     // code here
//     let newOrder = {};
//     if (key == 'category') {
//       for (let i = 0; i < objects.length; i++) {
//         if (newOrder.hasOwnProperty(objects[i].category)) {
//           newOrder[objects[i].category].push(objects[i]);
//         } else {
//           newOrder[objects[i].category] = [objects[i]];
//         }
//       }
//     } else {
//       for (let i = 0; objects.length; i++) {
//         if (newOrder.hasOwnProperty(objects[i].value)) {
//           newOrder[objects[i].value].push(objects[i]);
//         } else {
//           newOrder[objects[i].value] = [objects[i]];
//         }
//       }
//     }
//     return newOrder;
//   }
  
  // Example usage:
  // const inputObjects = [
  //   { id: 1, category: 'A', value: 10 },
  //   { id: 2, category: 'B', value: 20 },
  //   { id: 3, category: 'A', value: 30 },
  //   { id: 4, category: 'B', value: 40 },
  //   { id: 5, category: 'C', value: 10 },
  // ];
  
  // console.log(groupBy(inputObjects, 'category'));
  
  /* Should output:
  for category
  {
    'A': [ { id: 1, category: 'A', value: 10 }, { id: 3, category: 'A', value: 30 } ],
    'B': [ { id: 2, category: 'B', value: 20 }, { id: 4, category: 'B', value: 40 } ],
    'C': [ { id: 5, category: 'C', value: 50 } ]
  }
  for value
  {
    10: [{ id: 1, category: 'A', value: 10 }, { id: 5, category: 'C', value: 10 }],
    20: [{ id: 2, category: 'B', value: 20 }],
    30: [{ id: 3, category: 'A', value: 30 }],
    40: [{ id: 4, category: 'B', value: 40 }],
  }
  */

  // Pytm 

  // second round -> curry Sum

  // sum(1)(2,3)(4,5,6)
  // Promice ouptPut questions
    // cookes in depth and type 
  //  what is  Event delcation 


  // first Round 
  // what is closer

  // MamaEartrh -> outPut questions 

  // const value = { number: 10 }; // 40
  // const multiply = (x = { ...value }) => {
  //   console.log((x.number *= 2));
  // };
  // multiply(); // 20
  // multiply(); // 20
  // multiply(value); // 20
  // multiply(value);  // 40

  // Machine Coding Round American Express  
  //   Alert Box 
  //   create a Loading bar after loding bar filled than auto populate the alert box
    // outPut questions 

    // const [count,setCount] = useState(0)
    // useEffect(()=>{
    //   setInterval(()=>(setCount(count+1)),2000)
    // },[])
    //    <div>
    //     {count}
    //    </div>

    // Zepto machine Coding question -> 
    // https://codesandbox.io/p/sandbox/progress-bar-4-c3kjkm?file=%2Fsrc%2FApp.js%3A25%2C37
    // https://codesandbox.io/p/sandbox/musing-driscoll-6c83m9?file=%2Fsrc%2FApp.js

    // BolomLine 
    // css qusetions  

    // Meesho first Round

    // Resume Review
    // what is config driven UI
    // What is box Modal ?
    // two cricle ko center karna tha
    // what is pesdo  element ?
    // create a circle inside a cricle using pesdo element 
    // what is closer 
    // Flaten the Array  usning closer method
    // What are does reduce ?
    // reduc ka polifills
    // can i create filter using reduce Exapmle let arra = [1,2,3,4,5,6] Ans will be more than 3 [4,5,6]

    // Machine Coding Round praitce 
    //  PopUp 
    // Slider
    // CheckBoxes
    // React Tabs
    // search 
    // DS Algo

    // Kaden's Algo copany (Mxum sub Array sum) name upgrad 
  
    // Bureau Id   
    // 
    // LinkList Cycle detech
    // How can we build a system and maitain the system


    let s = "the quick brown fox jumped over the lazy dog";

// function distanceBetweenWords(text, word1, word2) {
//     // Get the positions of the words in the string
//     const index1 = text.indexOf(word1);
//     const index2 = text.indexOf(word2);

//     // Ensure both words exist in the string
//     if (index1 === -1 || index2 === -1) {
//         return "One or both words not found.";
//     }

//     // Calculate the distance
//     const distance = Math.abs(index2 - index1);

//     return distance;
// }

// const word1 = "fox";
// const word2 = "dog";
// const distance = distanceBetweenWords(s, word1, word2);

// console.log(`The distance between "${word1}" and "${word2}" is ${distance} characters.`);

// function lengthOfLongestSubstring(s) {
//   let maxLength = 0;
//   let charMap = new Map();
//   let left = 0;

//   for (let right = 0; right < s.length; right++) {
//       if (charMap.has(s[right])) {
//           // Update left pointer to the right of the last duplicate's position
//           left = Math.max(left, charMap.get(s[right]) + 1);
//       }
//       // Store/update the current character's position
//       charMap.set(s[right], right);
//       // Calculate the current length and update maxLength
//       maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// // Example usage:
// console.log(lengthOfLongestSubstring("abca")); // Output: 3

// function minPathSum(grid) {
//   const m = grid.length; // Number of rows
//   const n = grid[0].length; // Number of columns

//   // Fill the first row by accumulating the sum to the right
//   for (let i = 1; i < n; i++) {
//     grid[0][i] += grid[0][i - 1];
//   }

//   // Fill the first column by accumulating the sum downwards
//   for (let j = 1; j < m; j++) {
//     grid[j][0] += grid[j - 1][0];
//   }

//   // Traverse the grid and calculate the minimum path sum
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
//     }
//   }

//   // The minimum sum to reach the bottom-right corner
//   return grid[m - 1][n - 1];
// }

// // Example usage:
// const grid = [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ];
const grid =[[1,2,3],[4,5,6]]
// console.log(minPathSum(grid)); // Output: 7

// function minPathSub (grid){
//         const rows = grid.length
//         if(rows===0) return 0
//         const cols = grid[0].length

//         // Create a dp array to store the minimum path sums
//         const dp = Array.from({length:rows},()=>Array(cols).fill(0))
//         // fill one dirction for this reason i will take only one variable
//         dp[0][0] = grid[0][0]
//         for(let i=1;i<dp[0].length;i++){
//             dp[0][i] = grid[0][i] + dp[0][i-1]
//         }
//         // same for this i have to fill only y diration so i will take only one variable
//         for(let j=1;j<rows;j++){
//             dp[j][0] = grid[j][0] + dp[j-1][0]
//         }
//         // now i have to fill both diraction for this reason i have to take i and j both variable
//         for(let i=1;i<rows;i++){
//             for(let j=1;j<cols;j++){
//                 dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
                
//             }
//         }
        
//         console.log(dp,"dp")
//         return dp[rows-1][cols-1]
// }
// console.log(minPathSub(grid))

function maximumSubArraySum(nums) {
  let MaxSum = -Infinity
  for(let k =0;k<nums.length;k++)
  for(let i =k;i<nums.length;i++){
    let sum=0 
    for(let j=k;j<=i;j++){
      sum =sum + nums[j]
        if(MaxSum<sum){
          MaxSum = sum
        }
    }
    
  }
  return MaxSum
}
// let nums = [-2,1,-3,4,-1,2,1,-5,4]
// let nums = [5,4,-1,7,8]
// let nums = [1]
// console.log(maximumSubArraySum(nums))
// kadane Algo works on find the maxmum in the list of array
// function kadaneAlgorithm(arr) {
//   if (arr.length === 0) return 0; // Handle empty array edge case

//   let maxSoFar = arr[0]; // Initialize to the first element
//   let maxEndingHere = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//       // Update maxEndingHere to either start a new subarray or extend the current one
//       maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

//       // Update maxSoFar to store the maximum subarray sum found so far
//       maxSoFar = Math.max(maxSoFar, maxEndingHere);
//   }

//   return maxSoFar;
// }

// Example Usage:
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(kadaneAlgorithm(nums)); // Output: 6 (subarray: [4, -1, 2, 1])

function kadaneAlgorithm(arr) {
  let maxSum = -Infinity; // Initialize max sum to the smallest possible value
  let currentSum = 0;     // Initialize the current sum to 0

  for (let num of arr) {
    currentSum += num;  
                // Add the current number to the current sum
    // maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is larger
    if (currentSum < 0) currentSum = 0;    // Reset currentSum if it becomes negative
    console.log(currentSum,num) 
  }

  return maxSum; // Return the maximum sum
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(kadaneAlgorithm(arr)); // Output: 6


function majorityElement(nums) {
    let count = 0
    let candidate = null
    for(let n of nums){
    if(count == 0){
        candidate = n
        count = 1
    }else if(n === candidate){
        count++
    }else{
      count--
    }
    }
  console.log(candidate,count)
}

const arr1 = [5, 5, 5, 5, 3, 4];
// console.log(majorityElement(arr1)); 
 
// function minEatingSpeed(piles,h){
//   let maxPiles = Math.max(...piles)
//     for(let k=1;k<maxPiles;k++){
//       let pileHourEatBananaTotla =0
//       for(let n of piles){
//         let pileHourEatBanana  = Math.ceil(n/k)
        
//         pileHourEatBananaTotla = pileHourEatBananaTotla + pileHourEatBanana
//         console.log(pileHourEatBananaTotla,k)
//       }

//       if(pileHourEatBananaTotla<=h){
        
//         return k
//       }
//     }
//     return maxPiles
    
// }

function minEatingSpeed(piles, h) {
   let left = 1
   let right = Math.max(...piles)
   let result = right
   while (left<=right) {
      let mid = Math.floor((left+right)/2)
     
      if(findMinHoursBananaEat(piles,mid,h)){
        result = mid
        right = mid - 1
      }else{
        left = mid + 1
      }
   }
   return result
}
function findMinHoursBananaEat(piles,k,h){
        let hoursPerEating = 0
        
        for(let n of piles){
          hoursPerEating = hoursPerEating + Math.ceil(n/k)
        }
       if(hoursPerEating<=h) {
        return true
       }
}
// Example usage
const piles1 = [3, 6, 7, 11];
const h1 = 8;
// console.log(`Minimum eating speed for example 1: ${minEatingSpeed(piles1, h1)}`);  // Expected output: 4

// Another example
// const piles2 = [30, 11, 23, 4, 20];
// const h2 = 5;
// console.log(`Minimum eating speed for example 2: ${minEatingSpeed(piles2, h2)}`);  // Expected output: 30

// One more example
// const piles3 = [30, 11, 23, 4, 20];
// const h3 = 6;
// console.log(`Minimum eating speed for example 3: ${minEatingSpeed(piles3, h3)}`);  // Expected output: 23
// let piles = [30, 11, 23, 4, 20],  h = 5
// console.log(minEatingSpeed(piles,h))

// let inputArray  = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15],16]
// let n = 1
// function flattenArray(array,n){
//   function helper(arr,depth){
//     let ouptPut = []
//     for(let i =0;i<arr.length;i++){
//       if(Array.isArray(arr[i]) && depth<n){
//           ouptPut.push(...helper(arr[i],depth + 1))
//       }else{
//         ouptPut.push(arr[i])
//       }
//     }
//     return ouptPut
//   }
//   return helper(array,0)
// }
// console.log(flattenArray(inputArray,n))


function toSnakeCase(input){
  let output = {}
  for(let x in input){
      if(typeof input[x] == 'string'){
        let upperCaseLettersIndex =  x.split('').findIndex((x)=> x=="A" || x== "N" || x== "D" || x== "I" || x== "C")
         let modifyString = x.replace(x[upperCaseLettersIndex],"_"+x[upperCaseLettersIndex]?.toLowerCase())
         output[modifyString] = input[x]
      }else if(typeof input[x] === 'object'  && !Array.isArray(input[x])){
          let upperCaseLettersIndex =  x.split('').findIndex((x)=> x=="A" || x== "N" || x== "D" || x== "I" || x== "C")
          let modifyString = x.replace(x[upperCaseLettersIndex],"_"+x[upperCaseLettersIndex]?.toLowerCase())
          output[modifyString] = toSnakeCase(input[x])
          
      }else if(typeof input[x] == 'object' && Array.isArray(input[x])){
          let upperCaseLettersIndex =  x.split('').findIndex((x)=> x=="A" || x== "N" || x== "D" || x== "I" || x== "C")
          let modifyString = x.replace(x[upperCaseLettersIndex],"_"+x[upperCaseLettersIndex]?.toLowerCase())
          output[modifyString] = input[x].map(item => (
            typeof item === 'object' ? toSnakeCase(item) : item
          ));
      }
  }
  return output
}
// function toSnakeCase(input) {
//   let output = {};

//   for (let x in input) {
//     // Convert first uppercase letter (A, N, D, I, C) to snake_case
//     let upperCaseLetters = ['A', 'N', 'D', 'I', 'C'];
//     let upperCaseLettersIndex = x.split('').findIndex(ch => upperCaseLetters.includes(ch));
//     let modifiedKey = upperCaseLettersIndex !== -1
//       ? x.replace(x[upperCaseLettersIndex], "_" + x[upperCaseLettersIndex].toLowerCase())
//       : x;

//     if (typeof input[x] === 'string') {
//       output[modifiedKey] = input[x];
//     } else if (typeof input[x] === 'object' && input[x] !== null && !Array.isArray(input[x])) {
//       output[modifiedKey] = toSnakeCase(input[x]);
//     } else if (Array.isArray(input[x])) {
//       output[modifiedKey] = input[x].map(item => (
//         typeof item === 'object' && item !== null ? toSnakeCase(item) : item
//       ));
//     } else {
//       output[modifiedKey] = input[x]; // for number, boolean, null, etc.
//     }
//   }

//   return output;
// }

const input = {
firstName: "John",
lastName: "Doe",
contactDetails: {
phoneNumber: "1234567890",
emailAddress: "john.doe@example.com",
},
hobbies: ["reading", "travelling"],
userInfo: {
addresses: [
  { cityName: "New York", zipCode: "10001" },
  { cityName: "Los Angeles", zipCode: "90001" },
],
},
};

const result = toSnakeCase(input);
// console.log(JSON.stringify(result));
// output ->{
//   "first_name": "John",
//   "last_name": "Doe",
//   "contact_details": {
//     "phone_number": "1234567890",
//     "email_address": "john.doe@example.com"
//   },
//   "hobbies": ["reading", "travelling"],
//   "user_info": {
//     "addresses": [
//       { "city_name": "New York", "zip_code": "10001" },
//       { "city_name": "Los Angeles", "zip_code": "90001" }
//     ]
//   }
// }
