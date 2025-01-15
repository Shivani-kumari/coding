

function fetchData(url) {
    return new Promise((reslove,reject) =>{
            setTimeout(() => {
                const data = {message:'Data retrieved'}
                reslove(data)
            }, 1000);
    })
}

function processData(data) {
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            const processedData = data.message.toUpperCase()
            reslove(processedData)
        }, 500);
    })
   
}
fetchData('https://api.example.com/data')

let items = [
    {color: 'red', type: 'tv',age:'18'},
    {color:'silver',type:'phone',age:'20'},
    {color:'blue',type:'book',age:'17'}
]
const excludes = [
    {k:'color',v:'silver'},
    {k:'type',v:'tv'}
]
function excludeItems(items,excludes) {
    excludes.forEach(pair =>{
        items = items.filter(item => item[pair.k]===item[pair.v])
        console.log(items[pair.k],items[pair.v])
    })
    return items
}
// console.log(excludeItems(items,excludes))

const obj = {
    a:{
        b:{
            c:[1,2,3]
        }
    }
}

// function getKey(obj,get,anotherArg) {
//     if(get=='a.b.c'){
//         return obj.a.b.c
//     }
    
//     if(typeof Number(get[get.length-1])=='number'){
//         let num = Number(get[get.length-1])
//        if(num || num==0)
//        return obj.a.b.c[num]
//     }

//     if(get.includes('[')){
//         let num = get[get.length-2]
//         return obj.a.b.c[num]
//     }
//     if(anotherArg){
//         return anotherArg
//     }

// }
function getKey(obj,path,valueIfNotPresent) {
    if(!Array.isArray(path)){
        path = path.replace('/\'[(\w+)\]/g', '.$1')
        console.log(path,"path")
        path = path.split('.')
        console.log(path,"anotherpath")
    }
    let currObj = obj
    for(const ele of path){
        if(!currObj[ele]) return valueIfNotPresent
        currObj = currObj[ele]
        console.log(currObj,"checkcurrentobject", currObj[ele],ele)
    }
    return currObj
}

// console.log(getKey(obj,'a.b.c'))
// console.log(getKey(obj,'a.b.c.0'))
// console.log(getKey(obj,['a','b','c','2']))
// console.log(getKey(obj,'a.b.c[3]'))
// console.log(getKey(obj,'a.c','learnWithChirag'))

// Q.  Inersection of two sorted arrays
  function intersect(arr1,arr2) {
    let obj1 = {}
    let obj2 = {}
    let resultArray = []
    for(let i = 0;i<arr1.length;i++){
        if(obj1.hasOwnProperty(obj1[arr1[i]])){
            obj1[arr1[i]]++
        }else{
            obj1[arr1[i]] = 1
        }
    }
    for(let j of arr2){
       if(obj2.hasOwnProperty(j)){
        obj2[j]++
       }else{
        obj2[j] = 1
       }
    }
    for(let value in obj1){
        let index = 0
        if(obj2.hasOwnProperty(value)){
           
            if(obj1[value]==obj2[value]){
                index = obj1[value]
            }else if(obj1[value]<obj2[value]){
                index = obj1[value]
            }else{
                index = obj2[value]
            }
            
            for(let i=0;i<index;i++){
                resultArray.push(value)
            }

            console.log(index)
        }
    }
    
    console.log(obj1,obj2,resultArray)
  }
  function twoPointerIntersect(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];

    // Traverse both arrays using two pointers
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            // If both values are equal, add to the result and move both pointers
            result.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            // Move pointer `i` if arr1's value is smaller
            i++;
        } else {
            // Move pointer `j` if arr2's value is smaller
            j++;
        }
    }
    return result;
}

// Example usage:
// console.log(twoPointerIntersect([1, 2, 2, 3, 4, 4, 5, 6, 6], [2, 2, 4, 5, 5, 6, 6, 2000]));

const customTree = {
    id:'root',
    childeren:[
       {
        id:'child1',
        childeren:[
            {id:'grandchild1',childeren:[]}
        ]
       } ,
       {id:'child2',childeren:[]}
    ]
}

// polyfill for docment.getElementById
let newObj = customTree
 function getId(id){
     if(newObj.id==id){
        return newObj
     }else if(Array.isArray(newObj.childeren)){
        for(let i =0;i<newObj.length;i++){
            console.log(newObj)
            if(newObj[i].id==id){
                return newObj
            }
        }
     }else{
        console.log(newObj.childeren,id)
        getId(id)
     }
}


console.log(getId('child1'))