let a = document.getElementById('a')
let b = document.getElementById('b')
let result = document.getElementById('result')
let button = document.getElementById('button')
let progressbar = document.getElementById('proress')
let res1 =0
let res2 =0

a.addEventListener('change' ,function (e) {
    res1 = e.target.value
    progressbar.style.width = 100 + 'px' 
    progressbar.style.height="100%"
    progressbar.style.backgroundColor="red"
})

b.addEventListener('change',function (e) {
    res2 = e.target.value
    progressbar.style.width = 200 + 'px' 
    progressbar.style.height="100%"
    progressbar.style.backgroundColor="red"
})

button.addEventListener('click',function () {
  
    let add = res1*1 + res2*1
    result.value = add
    progressbar.style.width = 300 + 'px' 
    progressbar.style.height="100%"
    progressbar.style.backgroundColor="red"
})


