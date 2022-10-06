
// const obj = {
    
//     hii : "shivani",
//     test : function te() {
//         const a = ()=>{
//             console.log(this)
//         }
//         a()
//     },
//     fun : () => {
//         console.log(this)
//     },
//     a: console.log(this)
// }
// const obj1 = {
//     hii: "Atyaya",
// }
// obj.a
// obj.fun()
// obj.test()

// obj.fun.call(obj1)

// for(var i=0;i<3;i++){
    
//     function time(i){
//         setTimeout(()=> console.log(i), 100)
//     }
//     time(i)
    
// }
// function x(){
//     a()
//     function a() {console.log('m')}
//     a()
//     function a() {console.log('n' )}
//     a()
// }
// x()
//     var funcs = constfuncs () ; console.log(funcs[5] () )

//     var a = {
//         h:'hello'
//     }
//    var b=  {
//         h:'hello'
//     }
//     var c = a

//     console.log(a==c)

// let array = [7, 0, 2]
    
    // [5,1,4,20,78,80]

    // [1,4,5,20,78]
    // []6

    // function short (arr) {
    //     let temp
    //     for(let i=0;i<arr.length-1;i++){
    //         for(let j=0;j<arr.length-i;j++){
    //             if(arr[j]>arr[j+1]){
    //                 console.log(arr[j],arr[j+1])
    //                 temp = arr[j]
    //                 console.log(temp,'T')
    //                 arr[j]=arr[j+1]
    //                 arr[j+1]=temp
    //             }
    //         }
    //     }
    // }
    // short(array)
    // console.log(array)

    // conver the sting world of last later into the captial

    // var srt = "my name is shivani and i love aadi"
//     var s =srt.split(' ')
//     function last(str){
//        let araryString = str.split(' ')
//         let newStr = ""
//        for(let i=0;i<araryString.length;i++){

//         let lastlater = araryString[i].length
//         let char = araryString[i].charAt(lastlater-1)
//         let newString = araryString[i].slice(0,lastlater-1)
//         let stringCaptial = newString + char.toUpperCase()

//         newStr += stringCaptial + " "
//        }
//        return newStr
//     }
//    console.log(last(srt))

// this link is React tricky questions

// https://www.freecodecamp.org/news/react-interview-question-what-gets-rendered-in-the-browser-a-component-or-an-element-1b3eac777c85/

// var array = [1,2]
// array.length = 0
// console.log(array)

// let a = [2,1,9,5]
// let b = [3,2,6,4]

// let c = a.sort().concat(b.sort())

// console.log(c.sort())

// console.log(4 + "3" + 2 + 6)
 
// ((function) {
//     console.log(1)
//     setTimeout (function ( ) {console.log(2)}, 0)
//     Promise.resolve().then ( () => console.log(3))
//     console.log(4) }) ():

// (function() {
//   console.log(1) 
//   setTimeout(function(){console.log(2)},0)
//   Promise.resolve().then(() => console.log(3))
//   console.log(4)
// })()

// Symbols data type

// const bowl = {
//     [Symbol('apple')]: { color: 'red', weight: 136.078 },
//     [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
//     [Symbol('orange')]: { color: 'orange', weight: 170.097 },
//     [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
//   };
//   console.log(bowl);

//   const bowl1 = {
//     'apple': { color: 'red', weight: 136.078 },
//     'banana': { color: 'yellow', weight: 183.151 },
//     'orange': { color: 'orange', weight: 170.097 },
//     'banana': { color: 'yellow', weight: 176.845 }
//   };
//   console.log(bowl1);

// function foo (array) {
//     return Object.freeze(array.reduce((obj,item,index)=>{

//         if(typeof item === 'string')
//         {
//             // obj[obj[index] = item.toLowerCase()] = index
//             obj[index]= item.toLowerCase()
//         }
//         return obj
//     },{}))
// }
// const bar = foo(['a','B','C'])
// console.log(bar)
// console.log(bar.A + '|' + bar.b + '|' + bar.C)

// var a =10
// let a= 20
// console.log(a)

// Example of closer 

// function constfuncs (){
//     var funcs = []
//     for(var i =0;i<10;i++){
//        function c (i) {funcs[i] = function () {return i}}
//        c(i)
//     }
//     return funcs
    
// }

// function constfuncs (){
//     var funcs = []
//     for(var i =0;i<10;i++){
//        funcs[i] = function () {return i}
       
//     }
//     return funcs
    
// }
// let is block level scop but isse kaya change hota h please do research
// var funcs = constfuncs()
// console.log(funcs[9]())

// hosting example

// var x = 21
// var girl = function (){
//     console.log(x)
//     var x =20
// }
// girl()

// const obj = {

//     name : "shivani",
//     work: function (){
//         return ()=>this.name + ' ' + "software Engg"
//     }
// }

// console.log(obj.work()())


// console.log(2 + true)

// console.log(+ "dude")

// const obj={
//     "h" : 1,
//     "2": 2
// }
// delete obj.h
// console.log(obj)

// const a = (function(){
//     return parseInt('1.5')
// })()

// console.log(typeof a)

// Promise example

// let p1 = new Promise((resolve,reject)=>{
//     resolve("foo")
// });
// let p2 = new Promise((resolve,reject) =>{
//     reject ("bar")
// })

// console.log("bip")

// p1.then(val => {
//     console.log(val)
//     return p2
// })
// .then(val =>{
//     console.log("buz")
// })
// .catch(err =>{
//     console.log(err)
// })
// console.log("bop")

// class MyList extends Array
// {
   
// constructor (someArg) {
//     super()
// this.someArg = [...someArg];
// }}
// let theList = new MyList ("foo") ;
// console.log(theList)

// function foo(obj) {
//     return{
//     a: obj.bar,
//     b: obj.baz
//     }
// }
//     const { a } = foo ({ bar: 27, baz: 41 })

//     console.log(a)

// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },100)
// }

// console.log(parseInt("1"))
// const l = 1 + undefined

// console.log(Number(undefined),l) 
// const sum = eval('10*10+5');
// console.log(typeof sum)
// Array.prototype.duplicate = function(){
//     return this.concat(this); 
//     }

//     console.log(['a', 'b', 'c', 'd'].duplicate())

// const myPromise = Promise.resolve(Promise.resolve('Promise!'));
// //  console.log(myPromise)
// function funcOne() {
// myPromise.then(res => res).then(res => console.log(res));
// setTimeout(() => console.log('Timeout!'));
// console.log('Last line!');
// }

// async function funcTwo() {
// const res = await myPromise;
// console.log(await res,"funcTwo");
// setTimeout(() => console.log('Timeout!',"funcTwo"));
// console.log('Last line!',"funcTwo");
// }

// funcOne();

// funcTwo();

//JavaSctipt important Qestion

// console.log(0.1+0.2)

// if(0.1+0.2===0.3){
//     console.log("yes")
// }else{
//     console.log("no")
// }


// use of setInterval and clearInterval

// let array = [1,10,3,4,5,11,8]
// var print =(arr)=>{
//     let i =0
//     const myInterval = setInterval(function (){
//         console.log(arr[i])
//         i++
//         if(i==array.length){
//             clearInterval(myInterval)
            
//         }
//     }, 1000);
// }
// print(array)

// for(let i=1;i<10;i++){
//     setTimeout(()=>console.log(i),1000*i)
// }

// const foo = [1,2,3]

// const [n] = foo
// console.log(n)
// const a = async ()=>{
//     await console.log("promice")
// }
// console.log(a())
 
// Array destraturay
// let a = 10 ;
// let b = 20;
//  [b,a] = [a,b]
// console.log(a,b)

//an array of numbers
// let numberArray = [1, 2, 3, 4, 5];

// //output the square of each number
// function forEachExample(numberArray) {
//      numberArray.forEach(num => {
//         return num*num
//     }
      
//     );
// }


// //the array hasn't changed
// console.log(numberArray);
// console.log(forEachExample(numberArray));

// Privacy implemetation in javaScript
// function SecretiveProto() {
//     const secret = "The Class is a lie!"
//     this.spillTheBeans = function() {
//       console.log(secret)
//     }
//   }
  
  const blabbermouth = new SecretiveProto()
  try {
    console.log(blabbermouth.secret)
  }
  catch(e) {
    // TypeError: SecretiveClass.secret is not defined
  }
  
  blabbermouth.spillTheBeans() // "The Class is a lie!"
  