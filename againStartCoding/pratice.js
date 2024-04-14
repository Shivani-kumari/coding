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

// console.log(rotateArrayByKPositions())
// Make a stopwatch using JavaScript with buttons to start, pause, and reset the timer. The second round had me simulate a board game with dice rolls and show the winner and the dice rolls for each player in a table.
// What is the meaning of HTTP/1.1
// Some questions were 1. Rotate a matrix by 90° clockwise 2. Implement stack operations and a getMin() operation which returns the minimum element in the stack at any point. 3. Difference between array and linked list in terms of insertion, deletion, memory, search time.