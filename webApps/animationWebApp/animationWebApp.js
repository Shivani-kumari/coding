function progress() {
    let cr1 = document.querySelector('.cricle1')
let cr2 = document.querySelector('.cricle2')
let cr3 = document.querySelector('.cricle3')
let cr4 = document.querySelector('.cricle4')
let button = document.getElementById('start')
let per = 10

function animation() {
if(per==250){
per = 10
}else{
    per +=10
    cr1.style.width= per + 'px'
    cr1.style.borderRadius=  '8px'
    cr2.style.borderRadius=  '8px'
    cr2.style.height= per + 'px'
}
}
let id 
button.addEventListener('click',()=>click())
function click() {
    id = setInterval(animation,50)
}

    
}
progress()