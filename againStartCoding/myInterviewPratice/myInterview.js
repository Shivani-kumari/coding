
 function sum(...arg1) {
     let total = arg1.reduce((a,b)=>a+b,0)
    function innner (...arg2){
        if(arg2.length ===0){
            return total
        }
       total+= arg2.reduce((a,b)=>a + b,0)
       return innner
    }
    return innner

 }

// console.log(sum(1)(2, 3)(4, 5, 6)()); // Output: 21

// var a =2;
// b=1
// function f(z){
//     b=3
//     c=4;
//     var d = 6
//     e=1

//     function g(){
//         var en =0;
//         d= 3*d
//         return d
//     }
//     console.log(en,"checking the value")
//     return g()
//     var en = 3// it run in complie phase
// }
// f(1)

// function outer() {
//     let sum =0
//     function inner() {
//         sum +=2
//         return sum
//     }
//     return inner
// }
// let addation = outer()
// console.log(addation())
// console.log(addation())
// console.log(addation())


// for (var index = 0; index <= 7; index++) {
    
//     function nameo(i) {
//         setTimeout(()=>console.log(i),3000)
//     }
//     nameo(index)
// }

// const obj = { greet:
//      function(){
//         console.log(this)
//      },
//      a:console.log(this,"checking this value inside") }; 
// obj.greet();
// obj.a

    const person = {
        name: "Alice",
        greet: function () {
        setTimeout(() => {
            console.log(this.name)
        }, 0);
        },
    };
    
    const {name,greet} = person;
    // greet();
    // console.log(name)
// person.greet()
  
// async function example() {
//     console.log("Start");
//     const result = await Promise.resolve("Resolved!");
//     console.log(result);
//     console.log("End");
// }

// example();
// console.log("Outside async");

// function Person(name) {
//     this.name = name
// }
// Person.prototype.sayHello = function (){
//     console.log(`Hello, my name is ${this.name}`)
// }
// const alice = new Person("Alice")
// const shivani = new Person("Shivani")
// alice.sayHello()
// shivani.sayHello()


Array.prototype.myRduce = function (callBack,inialValue) {
            let res 
            let start 
            if(inialValue){
                res = inialValue
                start = 0
            }else{
                res = this[0]
                start = 1
            }
            for(let i=start;i<this.length;i++){
                res = callBack(res,this[i],i,this)
            }
            return res
}
// let array = [1,2,3,4,5]    
// console.log(array.myRduce((acc,currentValue)=>acc + currentValue,2))
function filterUsingReduce(array, callback) {
    return array.myRduce((accumulator, currentValue, index, originalArray) => {
        if (callback(currentValue, index, originalArray)) {
            accumulator.push(currentValue); // Include the element if the condition is true
        }
        return accumulator; // Return the accumulated array
    }, []); // Initial value is an empty array
}

// const numbers = [1, 2, 3, 4, 5, 6];

// // Filter for even numbers
// const isEven = (num) => num % 2 === 0;

// const evenNumbers = filterUsingReduce(numbers, isEven);
// console.log(evenNumbers); // Output: [2, 4, 6]

// // Filter for numbers greater than 3
// const greaterThanThree = (num) => num > 3;

// const largeNumbers = filterUsingReduce(numbers, greaterThanThree);
// console.log(largeNumbers); // Output: [4, 5, 6]

let array = [50,25,5,20,10]
function sort(array) {
    for(let i =0;i<array.length-1;i++){
        for(let j=0;j<array.length-i;j++){
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}
Array.prototype.mysort = function (){
    for(let i =0;i<this.length-1;i++){
        for(let j=0;j<this.length-i;j++){
            if(this[j]>this[j+1]){
                let temp = this[j]
                this[j] = this[j+1]
                this[j+1] = temp
            }
        }
    }
    return this
}
console.log(array.mysort())