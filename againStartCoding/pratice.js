

let value = [0,0,1,1,1,2,2,3,3,4]




// let value = [1, 1, 1, 3, 3, 5, 5];



// solveProblem(value);
// var removeDuplicates = function(nums) {
//     let i = 0;
//     let neArray =[]
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] !== nums[j-1]) {
//         i++;
//         neArray.push(nums[j])
//       }
//     }
//    console.log(neArray)
//     return i ;
//   }
var removeDuplicates = function(nums) {
  // Length of the updated array
  let count = 0;
  // Loop for all the elements in the array
  for (let i = 0; i < nums.length; i++) {
      // If the current element is equal to the next element, we skip
      if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
          continue;
      }
      // We will update the array in place
      nums[count] = nums[i];
      count++;
  }
  console.log(nums)
  return count;
  
}
//  console.log(removeDuplicates(value))

 function deleteElement(value = [1,20,5,78,30]){
// i want to delete the position 2 elements
        for(let i=0;i<value.length;i++){
          value[i]=value[i+1]
        }
        
 }
//  deleteElement()
// [1,2,3,5,4]
// function rotateArrayByKPositions(value = [1,2,3,4,5],k=3){
  
//   while (k>0) {
//     let cont = value[value.length-1]
   
//     for(let i=value.length-1;i>0;i--){
   
//       value[i] = value[i-1]
//       value[i-1] = cont
      
     
//     }
//     k--
//   }
// return value
// }
function reverseTheSentace(sentace  = "Program is a art"){
    let arrayOfString  = sentace.split(' ')
    let reverseString = ''
    for(let i =0;i<arrayOfString.length;i++){
      let word = arrayOfString[i]
      for(let j=arrayOfString[i].length-1;j>=0;j--){
        reverseString += word[j]
      }
      reverseString +=" "
    }
    console.log(arrayOfString,reverseString)
}
// console.log(reverseTheSentace())

function reverseStringWithoutAffectSpecialCaharcter( wordWithSpacialCharcter = "he$ll@o!"){
  const specialCharacters = ['#', ";", "'", "$", "@", "!", '|', "*"];
    let onPointer = 0;
    let secondPointer = wordWithSpacialCharcter.length - 1;
    let wordArray = wordWithSpacialCharcter.split('');

    while (onPointer < secondPointer) {
        if (specialCharacters.includes(wordArray[onPointer])) {
            onPointer++;
        }
        if (specialCharacters.includes(wordArray[secondPointer])) {
            secondPointer--;
        }
        if (!specialCharacters.includes(wordArray[onPointer]) && !specialCharacters.includes(wordArray[secondPointer])) {
            // Swap characters
            let temp = wordArray[onPointer];
            wordArray[onPointer] = wordArray[secondPointer];
            wordArray[secondPointer] = temp;
            onPointer++;
            secondPointer--;
        }
    }

    const reversedString = wordArray.join('');
    console.log(wordWithSpacialCharcter);
}
// console.log(reverseStringWithoutAffectSpecialCaharcter())
 function targetSum(array = [3,3],target = 6) {
        let onePointer = 0
        let seoncdPointer = array.length-1
        while (onePointer<seoncdPointer) {
          if(array[onePointer]+ array[seoncdPointer]>target){
                seoncdPointer--
          }else if(array[onePointer]+ array[seoncdPointer]<target){
            onePointer++
          }else if(array[onePointer]+ array[seoncdPointer]==target){
              return [onePointer,seoncdPointer]
          }
        }
        return [];
 }
//  console.log(targetSum())
var removeElement = function(nums = [0,1,2,2,3,0,4,2], val=2) {
  let k = 0;
  for(let i = 0 ; i < nums.length; i++){
      if(nums[i] !== val)
      {
          nums[k] = nums[i];
          k++; 
          console.log(nums[i],nums)       
      }
  }
  return k;
};
// console.log(removeElement())
// ans = [1,3,12,0,0] 
// function moveAllZeroToEnd(nums = [0,1,0,3,12]){
//   let startPointer = 0
//   let endPointer = nums.length- 1
//   while (startPointer<endPointer) {
//     if(nums[startPointer]==0 && nums[endPointer]!=0){
//       nums[startPointer]=nums[endPointer]
//       nums[endPointer]=0
//       startPointer++
//       endPointer--
//     }else if(nums[endPointer]==0){
//       endPointer--
//     }else if(nums[startPointer]!=0){
//       startPointer++
//     }
//   }
//   return nums
// }
// function moveAllZeroToEnd(nums = [1, 2, 0, 4, 3, 0, 5, 0]){
//   // ans = [1,3,12,0,0] 
//   let numberOFzero =0
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]==0){
//       numberOFzero++
//     }
//     while(numberOFzero!=0){
//       let swap =0
//       for(let i=0;i<nums.length-swap;i++){
//         if(nums[i]==0){
//           nums[i]=nums[i+1]
//           nums[i+1]=0
//           swap++
//         }
//       }
//       numberOFzero--
//     }
//   }
//   return nums
// }
function moveAllZeroToEnd(nums = [0,1,0,3,12]) {
  let leftPointer = 0
  for(let rightPointer =0;rightPointer<nums.length;rightPointer++){
    if(nums[rightPointer]!=0){
      [nums[rightPointer], nums[leftPointer]] = [nums[leftPointer], nums[rightPointer]];
      leftPointer++
    }
  }
  return nums
}
// console.log(moveAllZeroToEnd())
// function removeDuplicatesFromShortedArray(nums = [0,0,1,2,3,4,5,6,7,8]){
//     let onePointer = 0
//     for(let seoncdPointer=1;seoncdPointer<nums.length;seoncdPointer++){
//       if(nums[onePointer]!=nums[seoncdPointer]){
//         onePointer++
//         nums[onePointer]=nums[seoncdPointer]
//       }
//     }
//     console.log(nums)
//     return ++onePointer
// }

// console.log(longestSubsting())

// console.log(removeDuplicatesFromShortedArray())


// function removeDuplicatesTwose(nums = [0,0,1,1,1,1,2,3,3]) {
//   let obj = {}
//   for(let i in nums){
//     if(obj.hasOwnProperty(nums[i])){
//       obj[nums[i]] +=1
//     }else{
//       obj[nums[i]] = 1
//     }
//   }
//   for(let value in obj){
//     // console.log(value,"value")
   
//    if(obj[value]>2){
//     let index= nums.findIndex((val)=>val == value)
//     nums.splice(index,obj[value]-2)
//    }
//     // console.log(nums,"nums")
//   }
  
// }
// console.log(removeDuplicatesTwose())



function removeDuplicateTowse(nums = [0,0,1,1,1,1,2,2,2,3,3]) {
  let c=0 ;
    
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i] !== nums[i+2]){
            nums[c] = nums[i];
            console.log(nums,c,i)
            c++
        }
    }

    return c;
}
// console.log(removeDuplicateTowse())
// function longestSubArray(nums = [1,2,2], k = 2){
  
//       let secondIndex = k
//       let arrSubArray = []
//       if(nums.length ==k){
//        arrSubArray.push(nums)
//       }
//       // console.log(arrSubArray)
//       for(let i=0;i<nums.length-k;i++){
//           arrSubArray.push(nums.slice(i,secondIndex))
//           secondIndex++
//       }
//       let largeNumber = -Infinity
//       let sum =0
//       for(let j =0;j<arrSubArray.length;j++){
//       console.log(new Set(arrSubArray[j]).size)
//         if(new Set(arrSubArray[j]).size === arrSubArray[j].length){
//           console.log(arrSubArray[j])
//            sum = arrSubArray[j].reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          
//         }
       
//         if(largeNumber<sum){
//           largeNumber = sum
//         }
//       }
      
//       console.log(arrSubArray)
      
//       if(largeNumber === -Infinity){
//         console.log(largeNumber,"i ma")
//         return 0
//       }
//       return largeNumber
// }
// console.log(longestSubsting())

function longestSubstring(s = "lhdrxershqatgswgusoyupexdobckhzvqemnkfirwklcejkabyyypcvvqzxciyyacmpnsxeqjrsndfogdoevrcqjbnmjmmj"){
  let subStingArray = []
  let firstIndex =0
  let secondIndex = 1
  let setSubStringArray = new Set()
  
      while (firstIndex<s.length) { 
        subStingArray.push(s.slice(firstIndex,secondIndex))
        let newString = s.slice(firstIndex,secondIndex).split('').sort().join('')
        // console.log(newString,"nwString")
        setSubStringArray.add(newString)
        if(secondIndex==s.length){
          firstIndex++
          secondIndex=firstIndex +1
        }else{
          secondIndex++
        }
       
      }
      // console.log(setSubStringArray)
      // console.log(subStingArray)
      let ferquencyTrackArray = []
      
      for(let value of setSubStringArray){
          let obj = {}
          let flag = true
          for(let i =0;i<value.length;i++){
            if(obj.hasOwnProperty(value[i])){
              obj[value[i]]++
              flag = false
              break;
            }else{
              obj[value[i]] = 1
              
            }
          }
          if(flag){
            ferquencyTrackArray.push(value)
          }
          
      }
     
      console.log("Length of the longest string:",  Math.max(...ferquencyTrackArray.map(str => str.length)));

    return  Math.max(...ferquencyTrackArray.map(str => str.length));
}

console.log(longestSubstring())

function longestSubstringContinus(s = "lhdrxershqatgswgusoyupexdobckhzvqemnkfirwklcejkabyyypcvvqzxciyyacmpnsxeqjrsndfogdoevrcqjbnmjmmj") {
  let longestLength = 0;
  const seen = new Set();

  for (let i = 0; i < s.length; i++) {
      let substring = '';
      for (let j = i; j < s.length; j++) {
          if (seen.has(s[j])) break;
          substring += s[j];
          seen.add(s[j]);
          longestLength = Math.max(longestLength, substring.length);
      }
      seen.clear();
  }

  console.log("Length of the longest string:", longestLength);
  return longestLength;
}

// [1,5,4]
// [5,4,2]
// [4,2,9]
// [2,9,9]
// [9,9,9]
// console.log(rotateArrayByKPositions())
// nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Make a stopwatch using JavaScript with buttons to start, pause, and reset the timer. The second round had me simulate a board game with dice rolls and show the winner and the dice rolls for each player in a table.
// What is the meaning of HTTP/1.1
// Some questions were 1. Rotate a matrix by 90° clockwise 2. Implement stack operations and a getMin() operation which returns the minimum element in the stack at any point. 3. Difference between array and linked list in terms of insertion, deletion, memory, search time.

