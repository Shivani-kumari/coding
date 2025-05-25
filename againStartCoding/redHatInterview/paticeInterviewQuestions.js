function lengthOfLogestSubStringWithoutRepatingCharacter(string){
        let stringOfArray = []
        for(let i=0;i<string.length;i++){
            let subString = ""
            for(let j =i;j<string.length;j++){
               
                subString +=string[j]
                const sortSubSting = subString.split('').sort()
                if(removeDuplicate(sortSubSting)==false){
                    stringOfArray.push(sortSubSting)
                }
            }
        }
        let longestSubString = []

        for(let k=0;k<stringOfArray.length;k++){
            if(stringOfArray[k].length>longestSubString.length){
                longestSubString = stringOfArray[k]
            }
        
        }
        return longestSubString.join('')
}
// console.log(lengthOfLogestSubStringWithoutRepatingCharacter("pwwkew"))
function removeDuplicate(arrySting){
        let charSet = new Set()
        for(let char of arrySting){
            if(charSet.has(char)) return true
        }
        return false
}

function lengthOfLongestSubstring(s) {
    // Initialize a set to store unique characters in the current window
    let set = new Set();
    
    // 'left' is the start of the sliding window, 'maxLength' stores the length of the longest substring found
    let left = 0, maxLength = 0;

    // Iterate through the string with 'right' as the end of the sliding window
    for (let right = 0; right < s.length; right++) {
        // If the character at 'right' is already in the set, remove characters from the left
        console.log(set,"check set")
        while (set.has(s[right])) {
            
         set.delete(s[left]); // Remove the leftmost character from the set
         console.log(set,"check set after delete",right)
            console.log(s[left],"check left",left,"checking left index")
            
            left++; // Move the left pointer to the right
        }

        // Add the current character to the set
        set.add(s[right]);

        // Update maxLength with the size of the current window if it's larger than previous max
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // Return the length of the longest substring without repeating characters
    return maxLength;
}

// console.log(lengthOfLongestSubstring("abcabcbb"))

function mergeInterval(array){
       let result = [...array]
       let i =0;
       while (i<result.length) {
          let j = i+1
            while(j<result.length){
                if(result[i][0]<result[j][1] && result[j][0]<=result[i][1]){
                    result[i] = [Math.min(result[i][0],result[j][0]),Math.max(result[i][1],result[j][1])]
                    result.splice(j,1)
                }else{
                    j++
                }
            }
            i++
       }
       return result
}
[a,b]
[c,d]
a<d
c>=b
console.log(mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]]))
