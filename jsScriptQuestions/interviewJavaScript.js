// class Animal {
// static belly = []
// eat () { Animal.belly.push ("food") ; }
// }
// let a = new Animal () ;
// a.eat () ;
// console.log(Animal.belly[0])



    // let rainForestAcres = 10
    // let animals = 0
    // while (rainForestAcres < 13 || animals<= 2) {
    //     rainForestAcres++
    // animals += 2;
    // }
    // console.log (animals) 

// Diffrence between null and undefined
    // var thing
    // let func = (str = "no arg") =>{
    //     console.log(str)
    // }
    // func(thing)
    // func(null)

    // console.log(2+null)

    // console.log(2+undefined)

    // const obj = {
    //     a:1,
    //     b:2,
    //     c:3
    // }
    // const obj2 = {
    //     ...obj,
    //     a:0,
    // }
    // console.log(obj.a,obj2.a)
    
    //Destructuring Array
    // const numbers = [1,2,3,4,5]

    // const [one,two,three,four,five] = numbers

    // console.log(one,two,three,four,five)

    // please read about of typeof

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

    
    // console.log(typeof alert)

    
    // console.log(Number(undefined))ß

    // console.log(null>=0)
    // For relational abstract comparisons (<= , >=),
    //  the operands are first converted to primitives, then to the same type, before comparison.

// Relational Comparison: if both values are not type String, ToNumber is called on both. This is the same as adding a + in front, which for null coerces to 0.

// Equality Comparison: only calls ToNumber on Strings, Numbers, and Booleans.
// https://javascript.info/comparison#:~:text=Strange%20result%3A%20null%20vs%200&text=Comparisons%20convert%20null%20to%20a,don't%20equal%20anything%20else.
// please read about more here 

// let myTodoForToday = {
//     day : 'Sunday',
//     meetings: 0,
//     meetingsDone:0,

//     addMeetings: function (num) {
//       meetings =   meetings + num
//     },

//     disp : function () {
//         return `You have ${meetings} meetings today`
//     }
// }
// console.log(myTodoForToday.addMeetings(10) )
// console.log(myTodoForToday.disp())

// console.log(50+ '5' + '5')
// console.log(90 + + "20" + "7")
// console.log(7 + - "1" + "2")
// console.log(+"10" + "11" + "20")
// console.log("C" - "B" + "2")
// console.log("A"-"B"+2)

// class Calc {
//     constructor (){
//         this.count =0
//     }
//     increase(){
//         this.count++
//     }
// }

// const calc = new Calc()
// new Calc(). increase()
// console. log (calc. count)
// let a = [..."Prabhat"]
// console.log([..."Prabhat"])


// Protoptype inheritance

// Array.prototype.duplicate = function(){
//     return this.concat(this)
// }
// let arr =['a','b','c','d'].duplicate()
// console.log(arr)


// confusion of object proptoTpe please look this

// var User = function() {}

// User.prototype.attributes = {
//     isAdmin: "Shivani"
// }

// var admin = new User("Prabhat")

// var guest = new User("Niki")

// User.prototype.name = function () {
//     return "user"
// }

// guest.attributes.isAdmin = "Atdi"

// guest.name = function (){
//     return "antothe user"
// }
// a ="hello"
// console.log(global.a)
// console.log(admin,guest)

// console.log(admin.attributes.isAdmin)
// console.log(guest.attributes.isAdmin)

// console.log(admin.name())
// console.log(guest.name())

// Prototypes are a powerful and very flexible feature of 
// JavaScript, making it possible to reuse code and combine objects.

// console.log(Function instanceof Function)
// console.log(Function.prototvpe instanceof Function)
// console.log(Function.prototype.isPrototypeOf(Function))
// console.log(Function === Function.prototype)
// console.log(Function === Function.prototype.constructor)
// console.log(typeof Function.prototype)
// console.log(typeof Function)

// const sum = eval('10*10+5')
// console.log(sum)


// Random Number

// var upper = 30
// var lower = 25

// var myRandom = Math.floor(Math.random()*(upper-lower+1)+lower)
// console.log(myRandom)

// const user = {
//     email:'prabhat@mail.com',
//     password:'12345'
// }


// const updateUser = ({email,password}) =>{
//     if(email){
//         Object.assign(user,{email})
//     }
//     if(password){
//         user.password=password
//     }
//     return user
// }
// const updatedUser = updateUser({ email: "new@email.com" })
// console. log (updatedUser === user)
// console.log(user)

// (function test() {
//     function fn() {
//     arguments.callee. count = arguments.callee.count || 0;
//     return arguments.callee.count++;
//     }
//     console.log (
//     fn(),
//     fn(),
//     fn()
//     )
// })()

// this interview questions

// function Preson(name) {
//     this.name = name
//     this.getName = () => this.name
// }

// const p = new Preson('shivani')
// console.log('...',p.getName())

// const object = {
//     message : "Hello world",
//     logMessage () {
//         console.log(this.message)
//     }
// }
// setTimeout(object.logMessage,1000) // it prints undefined beause setTimout call function in window environment

