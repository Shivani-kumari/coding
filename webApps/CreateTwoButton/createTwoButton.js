const button = document.getElementById('button')
const container = document.getElementById('container')
let count =0
function createTwoButton() {
    let currentButton = this
    
    let button1 = document.createElement('button')
    button1.textContent = "button" + count++
    container.appendChild(button1)

    button1.setAttribute('id','button')
    button1.addEventListener('click',createTwoButton)
    let button2 = document.createElement('button')
    button2.textContent = "button" + count++
    container.appendChild(button2)
    button2.setAttribute('id',"button")
    button2.addEventListener('click',createTwoButton)
    currentButton.remove()
}
button.addEventListener('click',createTwoButton)