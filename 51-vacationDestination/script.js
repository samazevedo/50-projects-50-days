const formEl = document.getElementById('form')
const placeEl = document.getElementById('place')
const cityNameEl = document.getElementById('city-name')
const cityDescriptionEl = document.getElementById('city-description')
let wishListContainer = document.getElementById('wish-list')

formEl.addEventListener('submit', handleFormSubmit)

function wishListHeader() {
    if (wishListContainer.children.length === 0) {
        let h1 = document.createElement('h1')
        h1.setAttribute('class', 'title')
        h1.innerHTML = 'My Wish List'
        wishListContainer.appendChild(h1)
    }
}
wishListHeader()

function handleFormSubmit(event) {
    event.preventDefault()

    // clear form elements
    let destName = event.target.elements['destination'].value
    let destLocation = event.target.elements['location'].value
    let destPhoto = event.target.elements['photo'].value
    let destDesc = event.target.elements['description'].value
    for (let i = 0; i < formEl.length; i++) {
        formEl.elements[i].value = ''
    }

    // create a new Card
    createNewCard(destName, destLocation, destPhoto, destDesc)

    document.querySelector('#formEl')
}

function createNewCard(name, location, photoURL, description) {
    let card = document.createElement('div')
    card.className = 'card'
    let img = document.createElement('img')
    img.setAttribute('alt', name)
    let constantPhotoUrl = 'img/Hamnøy.jpg'
    if (photoURL.length === 0 || photoURL === undefined || photoURL === null) {
        img.setAttribute('src', constantPhotoUrl)
    } else {
        img.setAttribute('src', photoURL)
    }
    card.appendChild(img)
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    let cardTitle = document.createElement('h3')
    cardTitle.innerText = name
    cardBody.appendChild(cardTitle)

    let cardSubtitle = document.createElement('h4')
    cardSubtitle.innerText = location
    cardBody.appendChild(cardSubtitle)

    if (description.length !== 0) {
        let cardText = document.createElement('p')
        cardText.className = 'card-text'
        cardText.innerText = description
        cardBody.appendChild(cardText)
    }
    let cardDeleteBtn = document.createElement('button')
    cardDeleteBtn.innerText = 'remove'

    cardDeleteBtn.addEventListener('click', removeDestination)
    cardBody.appendChild(cardDeleteBtn)

    card.appendChild(cardBody)
    wishListContainer.appendChild(card)
}

function removeDestination(event) {
    let card = event.target.parentElement.parentElement
    card.remove()
}
