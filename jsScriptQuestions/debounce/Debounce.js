const button = document.getElementById('button')
const debounce =(fu,delay) =>{
    let timeoutId
    return function(...arg){
        if(timeoutId){
            clearTimeout(timeoutId)
        }
           timeoutId= setTimeout(()=>{
                fu(...arg)
            },delay)
    }
}
button.addEventListener('click',debounce(()=>{
    console.log('clicked')
},2000))

// https://codesandbox.io/s/debounce-example-forked-elwfks?file=/src/index.js:483-498
