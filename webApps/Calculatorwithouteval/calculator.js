let display_section = document.getElementById('display')

let buttons = Array.from(document.getElementsByClassName('button'))

buttons.forEach((button)=>{
button.addEventListener('click',el =>{
    doCalculate(el)

})
})
function calculate(value){
console.log(value)
const array = value.split('')
const index = array.findIndex((el)=>{
    if(el=="+" || el=="-"){
        return el
    }
})
const a = value.substring(0,index)
const b = value.substring(index+1,value.length)
let res =0
if(array[index]=='+'){
res = parseInt(a) + parseInt(b)
}
if(array[index]=='-'){
    res = parseInt(a) - parseInt(b)
    }
 
console.log(a,"value",b,array[index],res)
return res
}
function doCalculate(e) {
    if(display_section.innerText == '0'){
        display_section.innerText = ''
    }
    switch (e.target.innerText) {
        case 'AC':
            display_section.innerText='0'
            break;
            case "DEL":
                display_section.innerText = display_section.innerText.slice(0,-1)
                break;
            case '=':
           display_section.innerText = calculate(display_section.innerText)
                break;
        default:
            display_section.innerText +=e.target.innerText
            break;
    }
}
