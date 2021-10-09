const imgs = document.querySelectorAll('img')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const imgsContainer = document.getElementById('imgs')

nextBtn.addEventListener('click', nextImg)
prevBtn.addEventListener('click', prevImg)
let index = 0
let interval = setInterval(run, 4000)

function run() {
    index++
    changeImage()
}
function changeImage() {
    if (index > imgs.length - 1) {
        index = 0
    } else if (index < 0) {
        index = imgs.length - 1
    }
    imgsContainer.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

function nextImg(e) {
    e.preventDefault()
    index++
    changeImage()
    resetInterval()
}
function prevImg(e) {
    e.preventDefault()
    index--
    changeImage()
    resetInterval()
}
