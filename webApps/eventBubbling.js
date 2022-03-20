const button = document.querySelector('button')

const videoBox = document.querySelector('div')

// In modern browsers, by default, all event handlers are registered for the bubbling phase.



function show() {
    if(videoBox.getAttribute('class')==='hidden'){
    videoBox.setAttribute('class','showing')
    }
}

button.addEventListener("click",show)

videoBox.addEventListener('click',()=>{
    e.stopPropagation();
    videoBox.setAttribute('class',"hidden")})

const video = document.querySelector('video')
video.addEventListener('click',()=> video.play())