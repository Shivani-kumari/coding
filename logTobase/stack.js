

// function stack(s) {
//     let stack =[];
//     for(let i =0;i<s.length;i++){
//         if(s[i]=="(" || s[i] == '[' || s[i] == '{'){
//             stack.push(s[i])
//             console.log(stack)
//         }else{
//             if(stack.length==0)
//             return 0
//             let top = stack.pop()
//             console.log(top)
//             if((s[i] == ')' && top != '(' )|| (s[i]=="]" && top !='[') || (s[i]=='}'&& top !='{') ){
//                     return 0
//             }
//         }
//     }
    
//     if(stack.length!==0){
//         return 0
//     }
//     return 1
    // let stack = [];
    // let map = {
    //     ']': '[',
    //     '}': '{',
    //     ')': '('
    // };
    // for(let ch of s){
    //     if(ch in map){
    //         if(stack.length == 0)
    //             return false;
    //         if(map[ch] != stack.pop())
    //             return false;
    //     }else{
    //         stack.push(ch);
    //     }
    // }
    // return (stack.length > 0)?false:true;

// }
// console.log(stack("{(})"))

// function inetersection(a1,a2) {
//     let obj = {}
//     let res = []
//     if(a1.length>a2.length){
//         for(let i=0;i<a1.length;i++){
//             obj[a1[i]] = a1[i]
//         }
//     }else{
//         for(let i=0;i<a2.length;i++){
//             obj[a2[i]] = a2[i]
//         }
//     }
//     if(a1.length>a2.length){
//         for(let i=0;i<a2.length;i++){
//             if( obj.hasOwnProperty(a2[i])){
//                 res.push(a2[i])
//             }
           
//         }
//     }else{
//         for(let i=0;i<a1.length;i++){
//             if( obj.hasOwnProperty(a1[i])){
//                 res.push(a1[i])
//             }
//         }
//         }
//         return res
// }
// let a1 = [9,4]
// let a2 = [9,4,9,8,4]
// console.log(inetersection(a1,a2))

// Queue

class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(item){
        this.queue.push(item)
    }
    deqeue(){
        return this.queue.shift()
    }
}
let  qu = new Queue()
qu.enqueue(4)
qu.enqueue(9)
qu.enqueue(32)
qu.enqueue(10)
console.log(qu)
qu.deqeue()
console.log(qu)
