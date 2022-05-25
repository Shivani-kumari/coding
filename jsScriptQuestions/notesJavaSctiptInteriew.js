var obj = {
    count : 10,
    doSomethingLater : function (){
        console.log(this.count)
        function a() {
            console.log(this.count)
        }
        a()
        setTimeout(function(){ // the function executes on the window scope
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

obj.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.


var obj = {
    count : 10,
    doSomethingLater : function(){
        // The traditional function binds "this" to the "obj" context.
        setTimeout( () => {
            // Since the arrow function doesn't have its own binding and
            // setTimeout (as a function call) doesn't create a binding
            // itself, the "obj" context of the traditional function will
            // be used within.
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

obj.doSomethingLater();

// check two object equal or not

// const a = {
//     myName:'shivani'
// }
// const c = a
// let count 
// const b = {
//  myName:'shivani'
// }
// for(x in a){
//     console.log(x)
//     if(b.hasOwnProperty(x) && a[x]==b[x]){
//         count = true
//     }

// }

// console.log(count,"count")

// import notes the space inslde the string does not return false

// if(' '){
//     console.log("hello")
// }

// console.log(true%1)