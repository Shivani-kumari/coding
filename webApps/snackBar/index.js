function Notifications(position = "top-left",maxVisible = 3, parentContainer = document.body) {
    let queue = []
  const stackGap = 15;
  const offsetGap = 25;
  const notifications = {};
  const container = document.createElement("div");
  container.className = `notification-container ${position}`;
  parentContainer.appendChild(container);



  const createNotificationMessageElement = (msg) => {
    const box = document.createElement("div");
    box.className = `notification-message`;
    box.innerHTML = ` <span>${msg}</span> <button type="button" class="close-btn">x</button>
    `;

    box.querySelector(`.close-btn`)
    .addEventListener('click',()=>{
        let space = box.offsetHeight + stackGap;
        let sib = box.nextElementSibling
        while(sib){
            sib.style.top = parseInt(sib.style.top,10) - space + "px"
            space = sib.offsetHeight + stackGap
            sib = sib.nextElementSibling
        }
        this.hide(msg)
    })
    return box;
  };

  const resetNotification = (message, duration) => {
    console.log(notifications[message]?.timer,"notifications[message].timer")
    clearTimeout(notifications[message]?.timer);
    notifications[message].timer = setTimeout(() => {
      notifications[message].timer = setTimeout(() => {
        notifications[message].notificationElement.remove();
      }, duration);
    });
  };
  this.show = (message, position = 'top-left', duration = 5000) => {
    if (notifications[message]) {
      return resetNotification(message, duration);
    }
    if(container.children.length === maxVisible){
        return resetNotification(message, position,duration)
    }
    let timer = null;
    const notificationElement = createNotificationMessageElement(message);

    container.insertAdjacentElement(`afterbegin`, notificationElement);

    let space = notificationElement.offsetHeight + (offsetGap + stackGap);
    let sib = notificationElement.nextElementSibling;
    while (sib) {
      sib.style.top = space + "px";
      space += sib.offsetHeight + stackGap;
      sib = sib.nextElementSibling;
    }
    timer = setTimeout(() => {
      notificationElement.remove();
    }, duration);

    notifications[message] = { timer, notificationElement };
  };
  this.hide = (message) => {
      if(notifications[message]){
          clearTimeout(notifications[message].timer)
          notifications[message].notificationElement.remove()
          delete notification[message]
          if(queue.length){
              setTimeout(()=>this.show(...queue.shift(),300))
          }
      }
  };
}

const notification = new Notifications();

const [topLeftBtn] = document.querySelector(`.notification-triggers`).children;
let i =0
topLeftBtn.addEventListener(`click`, (event) => {
  notification.show("message from top left" + i++);
//   setTimeout(() => {
//     notifications.hide('message from top left')
      
//   }, 1500);
});

