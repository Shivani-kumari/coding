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
 const add = (a,b) => a + b
 let table = {}
function memoizeOne(add){
    return function (a,b) {
        
        if(table[`${a}${b}`]){
            return table[`${a}${b}`] + "i am calling"
        }else {
            table[`${a}${b}`] = add(a,b)
            console.log(table)
            return add(a,b)
        }
}
const memoizedAdd = memoizeOne(add)

// console.log(memoizedAdd(1,2))
// console.log(memoizedAdd(1,2))
// console.log(memoizedAdd(2,3))
// console.log(memoizedAdd(2,3))
let oputPutArray = []
const a = [1,2,3,[4,[5,6]],7,8]

const oputput = [1,2,3,4,5,6,7,8]
function flattenAray (a = [1,2,3,[4,[5,6]],7,8]){
    a.forEach((output)=>{
        if(output.length){
            flattenAray(output)
        }else{
            oputPutArray.push(output)
        }
    })
}
flattenAray()
console.log(oputPutArray)


