const container = document.getElementById('container')
const colors = [
    'rgb(255,170,115)',
    'rgb(198,123,255)',
    'rgb(11,190,200)',
    'rgb(227,0,116)',
    'rgb(0,271,50)',
    'rgb(200,20,70)',
]
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}
function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d, 0 0 10px #1d1d1d`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
