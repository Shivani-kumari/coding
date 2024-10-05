
const obj = [
    {
        key:'Sample 1',
        data:'Data1',
    },{
        key:'Sample 1',
        data:'Data1',
    },{
        key : "Sample 2",
        data:'Data2'
    },{
        key:'Sample 1',
        data:'Data1'
    },
    {
        key:'Sample 3',
        data:'Data1'
    },
    {
        key:'Sample 4',
        data:'Data 1'
    },
]

let Oputput = {
    "Sample 1" : [
        {
            key :'Sample 1',
            data:'Data1',
        },{
            key :'Sample 1',
            data:'Data1'
        },{
            key :'Sample 1',
            data:'Data1'
        }
    ],
    "Sample 2":[],
    "Sample 3":[],
}
// const add = (a,b) => a+b

// const memoizedAdd = memoizeOne(add)

// memoizedAdd(1,2) ; //3
// // Add fuction is called to get new value

// memoizedAdd(1,2) // 3
// // Add function is not executed : previous result is returned

// memoizedAdd(2,3) //5
// // Add function is called to get new value

// memoizedAdd(2,3) // 5
// Add function is not exuceted : previous result is returned
let onece = false
let outPutArray = []
let outPutObj  = {}
obj.forEach((obj)=>{
    
    if(outPutObj.hasOwnProperty(obj.key)){
        // if(onece){
        //     outPutObj[obj.key].push(obj) 
        // }
        outPutObj[obj.key].push(obj)
        // onece = false
    }else{
        outPutObj[obj.key]=[obj]
    }
})
// console.log(outPutObj,"optPutObj")
//  const add = (a,b) => a + b
//  let table = {}
// function memoizeOne(add){
//     return function (a,b) {
        
//         if(table[`${a}${b}`]){
//             return table[`${a}${b}`] + "i am calling"
//         }else {
//             table[`${a}${b}`] = add(a,b)
//             console.log(table)
//             return add(a,b)
//         }
// }
// const memoizedAdd = memoizeOne(add)

// console.log(memoizedAdd(1,2))
// console.log(memoizedAdd(1,2))
// console.log(memoizedAdd(2,3))
// console.log(memoizedAdd(2,3))
// let oputPutArray = []
// const a = [1,2,3,[4,[5,6]],7,8]

// const oputput = [1,2,3,4,5,6,7,8]
// function flattenAray (a = [1,2,3,[4,[5,6]],7,8]){
//     a.forEach((output)=>{
//         if(output.length){
//             flattenAray(output)
//         }else{
//             oputPutArray.push(output)
//         }
//     })
// }
// flattenAray()
// console.log(oputPutArray)



function calculator(){
    this.totalAmount = 0

    this.lacs = function (amountToBeAdded) {
        this.totalAmount += amountToBeAdded * 100000
        return this
    }
    this.crore = function (amountToBeAdded) {
        this.totalAmount += amountToBeAdded* 10000000
        return this
    }
    this.thousand = function (amountToBeAdded){
        this.totalAmount += amountToBeAdded * 1000
        return this
    }
    this.value = function (){
        
        return this.totalAmount
    }
}

// function computeAmount() {
//     // writing new calculatior we creating instance of calculator this is like this 
//     console.log(new calculator)
//     return new calculator()
// }

const calamount={
    val:0,
    lakhs:function(a){
    this.val+=a;
    return this;
    },
     crore:function(a){
    this.val+=a
    return this;
    },
    value:function(){
    return this.val;
    }
    }
    function calculateamount(){
    return calamount

    }
    // console.log(calculateamount().lakhs(57).crore(567).lakhs(566).value())
// console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value())




//   var obj1 = {
//     helloWorld : function(){
//         return "hello world, " + this.name
//     },
//     name :'Hello'
// }
// var obj2 = {
//     helloWorld : obj1.helloWorld,
//     name :"Bye"
// }
// console.log(obj2.helloWorld())
// console.log(obj2.helloWorld.call(obj1))

// Two way binding 
// if we say angular  if we have input change the inpt modal will be updated if anything changed in the modal your input get modify its two way binding

// please create a function modal (state,element), to bind state.value to the HTMLInputElement element.
// const input = document.createElemment('input')
// const state = {value:'Hi'}
// model(state,input)
// console.log(input.value) 'Hi'
// state.value = 'dev'
// console.log(input.value) // 'dev'
// input.value='engineerchirag'
// input.dispatchEvent(new Event('change'))
//console.log(state.value)//'engineerchirag'

// Chetna.Devikh@walmart.com


// Create a fetchWithAutoRetry(fetcher,count), which automatically fetch again when error happens, untill the maxium count is met. fuction fetchWithAutoRetry(fetcher,maximuRetryCount){}

// function fetchWithAutoRetry(fetcher,maxiumRetryCount) {
    
// }

// var x = 2
// function outer() {
//     // console.log(x)
//     function inner (){
//         console.log(x)
//     }
//     let x = 10
//     inner()
    
// }
// outer()
// [1,3,].map((x)=>x*2)
// Array.prototype.myMap =function (innerFunction){
//     let newArray = []
//     for(let i =0;i<this.length;i++){
//         console.log(innerFunction(this[i]))
//         newArray.push(innerFunction(this[i]))
//     }
//     return newArray
// }

// let array = [1]
// console.log(array.myMap((x)=>x*2))

// let original = {
//     name: 'John',
//     age: 30,
//     address: {
//         city: 'New York',
//         zip: 10001
//     },
//     hobbies: ['reading', 'swimming',['newArray',"newArray"]]
// };

//  const deepCopy = (obj, newObject) =>{

//         for(let value in obj){
//             if(typeof obj[value] === 'object' && !obj[value].length){
//                 newObject[value] =  deepCopy(obj[value],{})
//             } else if((typeof obj[value] === 'object') && obj[value].length){
//                    newObject[value] = deepCopy(obj[value],[])
//             }
//             else{
//                 newObject[value] = obj[value]
//             }
//         }
//         return newObject
//  }

//  console.log(deepCopy(original,{}))
//  let newArray = deepCopy(original,{})
//  newArray.hobbies = ["myhobbies"]
//  console.log(newArray,original)
// function deepCopy( obj ){
//     if(obj ===null || typeof obj !== 'object') return obj 
    
//     if(Array.isArray(obj)){
//         const copy = []
//         obj.forEach((curr)=>{
//             copy.push(deepCopy(curr))
//         })
//         return copy
//     }
    
//     let newObj = {}
//     Object.keys(obj).map((key)=> {
//         if(typeof obj[key] !== 'object'){
//             newObj[key] = obj[key]
//         }else{
//              newObj[key] = deepCopy(obj[key])
//         }
//     })
    
//     return newObj
// }
let original = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: 10001
    },
    hobbies: ['reading', 'swimming',['newArray',"newArray"]]
};


const anotherDeepCopy = (obj) => {
    // Check if the input is an array or an object
    if (typeof obj === 'object' && obj !== null) {
        let newObject = Array.isArray(obj) ? [] : {};

        for (let key in obj) {
            console.log("ia ma calling inside the if statement")
            // Ensure we are not copying properties from the prototype chain
            if (obj.hasOwnProperty(key)) {
                // Recursively copy objects or arrays
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    newObject[key] = anotherDeepCopy(obj[key]);
                } else {
                    // Copy primitive values
                    newObject[key] = obj[key];
                }
            }
        }
        return newObject;
    } else {
        // Return primitive values as they are
        console.log("i am calling inside the else statement")
        return obj;
    }
}


// let newArray = anotherDeepCopy(original);
// newArray.hobbies = ["myhobbies"];

// console.log(original);
// console.log(newArray);

// function makeAdder(n) {
//     var inc = n
//     var sum = 0
//     return function add(){
//         sum = sum + inc
//         return sum
//     }
// }
// var addder3 = makeAdder(3)
// addder3()
// addder3()
// console.dir(addder3)

// const sum = () =>{

// }
// console.log(sum(2)(2)(3))

// function sum(a) {
//     return (b) => {
//         if (b) {
//            return sum(a + b)
//         } else {
//             return a
//         }
//     }
// }
// console.log(sum(2)(3)(4)(5)())