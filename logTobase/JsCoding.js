// let input = 'abc'
// output =["abc","acb","bac","bca","cab","cba"]
// P(n, r) = n(n-1)(n-2)

// const permutations = (elements) =>{
    
//     if(elements.length === 0) return [[]]
//     const firstEl = elements[0]
//     console.log(firstEl,"firstEl")
//     const rest = elements.slice(1)
//     console.log(rest,"rest")
//     const permsWithoutFirst = permutations(rest)
//     const allPermutations = [];
//     console.log(permsWithoutFirst,"permsWithoutFirst")
//     permsWithoutFirst.forEach(perm =>{
//         for(let i=0;i<=perm.length;i++){
//             const permWithFirst = [...perm.slice(0,i),firstEl,...perm.slice(i)]
//             allPermutations.push(permWithFirst)
//         }
//     })
//     return allPermutations
// }
// console.log(permutations(['a','b','c']))



// Reducer example
// const users = [
//     {firstName:'akshay',lastName:'saini',age:26},
//     {firstName:'donald',lastName:'trump',age:75},
//     {firstName:'elon',lastName:'musk',age:50},
//     {firstName:'Adi',lastName:'keshav',age:26}
// ]

// const outPut = users.reduce(function (acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=++acc[curr.age]

//     }else{
//         acc[curr.age] = 1 // for this way we can add the new property and value
//     }
//     return acc
// },{})

// const output1 = users.reduce(function(acc,current){
//     if(current.age<30 ){
//         console.log(current.firstName)
//         acc[current.firstName] = current.age
//     }
   
// return acc
// },{})
// console.log(output1)
// most important
// var a = 2
// function any() {
//     console.log(a)
// }

// function shiv() {
//     var a = 1
//     any()
// }
//  shiv()

//  inside setTimout this will refers to windio object

// let obj ={
//     firstName:'Shivani',
//     call: function helo() {
//         setTimeout(function(){
//             console.log(this.firstName)
//         },100)
//     },
//     anotherCall: function anot() {
//         console.log(this.firstName)
//     }
// }
// obj.call()
// obj.anotherCall()

// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// function foo() {
//   setTimeout(()=>
//   {console.log(a)
//   console.log(b)}
//  , 100 )
// var a = 2
// let b = 12
// }
// foo()

// let obj = {
//   b:1,
//   a : function (){
// setTimeout( function(){
//   console.log(this.b)
// })
//   },
//   c: function (){
//     return function (){
//       console.log("hello")
//     }
//   }
// }
// let call = obj.c()
// call()
// let a = 5
// function experiment() {
  
//   setTimeout(()=>{
//       console.log(a)
//   },100)
//   let a = 10
// }
// experiment()

// "5431"->13->4

function sumOfStringNumber(str) {
  let newStr = str
  let res = 0
  while(newStr.length>1){
  let array =   newStr.split('')
   res =  array.reduce(
    (previousValue, currentValue) => previousValue + parseInt(currentValue),
    0
  )

    newStr = res + ""
  }
  return res

}

console.log(sumOfStringNumber("5431"))
