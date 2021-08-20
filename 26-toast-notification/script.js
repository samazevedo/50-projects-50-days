const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = ['lucky', 'luckier', 'not so lucky', 'try again']
const types = ['info', 'success', 'error']

button.addEventListener('click', () =>
    //createNotification('this is invalid data')
    createNotification()
)

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}
