function Notifications(position = "top-left",parentContainer = document.body){
    const container = document.createElement('div')
    container.className = `notification-container`
    parentContainer.appendChild(container)

    const createNotificationMessageElement = (msg) =>{
        const box = document.createElement('div')
        box.className = `notification-message`;
        box.innerHTML =` <span>${msg}</span> <button type="button" class="close-btn">x</button>`
        return box
    }
    

    this.show = (message,duration = 5000) => {
        let timer = null
        const notificationElement = createNotificationMessageElement(message)

        container.insertAdjacentElement(`afterbegin`,notificationElement)

        timer = setTimeout(()=>{
            notificationElement.remove()
        },duration)
    }
}

const notification = new Notifications()

const [topLeftBtn] = document.querySelector(`.notification-triggers`).children

topLeftBtn.addEventListener(`click`,(event)=>{
    notification.show('message from top left')
})

