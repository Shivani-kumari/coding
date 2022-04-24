// print n by n box
// for(let i=0;i<5;i++){
//     var s =""
//     for(let j=0;j<5;j++){
//         s += "*" + " "
//     }
//     console.log(s)
// }

// sum of two day array
// const data = [[11, 22, 33], [44, 55, 66], [77, 88, 99]];

// for(let i=0;i<data.length;i++){

// }
// let Sum=0
// data.forEach(value =>{
//    let a = value.reduce((sum,val) =>{
//         return sum + val
//     })
//     Sum +=a
// })
// console.log(Sum)

// Lower and Upper problem
// let string = "hAPPY"

// let converUpperToLower = (str)=>{
//     let array = str.split('')
//     let res =""
//     for(let i=0;i<array.length;i++){
//         if(array[i]==array[i].toUpperCase()){
//             res +=array[i].toLowerCase()
//         }else{
//             res +=array[i].toUpperCase()
//         }
//     }
//     return res
// }
// console.log(converUpperToLower(string))

// reverse string without affection special character

// var stringIn = 'My! name.is@rin';
// var rev = stringIn.replace(/[a-z]+/gi, function(s){ console.log(s)
//      return s.split('').reverse().join('')
//     });
// console.log(rev)
// https://www.tutorialrepublic.com/javascript-tutorial/javascript-regular-expressions.php
// function checkChar(ch) {
//     return ((ch >="a" && ch<="z") || (ch >= 'A' &&  ch<= 'Z'))
// }
// function reverseStringSpecial(string) {
//     let str = string.split('');
//     let i = 0
//     let j = str.length-1
//     while (i<j) {
//         if(!checkChar(str[i])){
//             ++i
//         }
//         if(!checkChar(str[j])){
//   --j
//         }
//         if(checkChar(str[i]) && checkChar(str[j])){
//         var tempChar = str[i];
//         str[i] = str[j];
//         str[j] = tempChar;
//         ++i;
//         --j;
//     }
//     }
//     return str.join('')
// }
// console.log(reverseStringSpecial("Ab,c,de!$"))


