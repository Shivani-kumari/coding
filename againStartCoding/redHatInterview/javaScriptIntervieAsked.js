

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

function minPathSub (grid){
        const rows = grid.length
        if(rows===0) return 0
        const cols = grid[0].length

        // Create a dp array to store the minimum path sums
        const dp = Array.from({length:rows},()=>Array(cols).fill(0))
        // fill one dirction for this reason i will take only one variable
        dp[0][0] = grid[0][0]
        for(let i=1;i<dp[0].length;i++){
            dp[0][i] = grid[0][i] + dp[0][i-1]
        }
        // same for this i have to fill only y diration so i will take only one variable
        for(let j=1;j<rows;j++){
            dp[j][0] = grid[j][0] + dp[j-1][0]
        }
        // now i have to fill both diraction for this reason i have to take i and j both variable
        for(let i=1;i<rows;i++){
            for(let j=1;j<cols;j++){
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
                
            }
        }
        
        console.log(dp,"dp")
        return dp[rows-1][cols-1]
}
console.log(minPathSub(grid))




