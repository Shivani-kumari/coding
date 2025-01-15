function showModal() {
    const modal = document.createElement('div')
    modal.className = 'modal';
    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content'
    const closeButton = document.createElement('span')
    closeButton.className = 'close'
    closeButton.textContent = 'x'
    const content = document.createElement('p')
    content.textContent = 'This is a dynamically created modal.'

    modalContent.appendChild(closeButton)
    modalContent.appendChild(content)
    modal.appendChild(modalContent)
    document.body.appendChild(modal)

    closeButton.addEventListener('click',function(){
        modal.style.display = 'none'
    })
}

const style = `
.modal{
    display:block;
    position:fixed;
    z-index:-1;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow:auto;
    background-color:rgba(0,0,0,0.4)
}
.modal-content{
    background-color:red;
    margin:15% auto;
    padding:20px;
    border:1px solid #888;
    width:80%;
}
.close{
    color:#aaa;
    float:right;
    font-size:28px;
    font-weight:bold;
}
.close:hover,
.close:focus{
    color:black;
    text-decoration:none;
    cursor:pointer;
}
`;

const styleElement = document.createElement('style')
styleElement.textContent = style
document.head.appendChild(styleElement)

showModal()