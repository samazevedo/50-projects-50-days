const myImg = ['image1.jpg', 'image2.jpg','image3.jpg','image4.jpg','image5.jpg']
let imgCount = 0;
const next = document.getElementById('next')
const previous = document.getElementById('previous')
const imgEl = document.getElementById('myimage')
const imgfade = document.querySelector('img')

next.addEventListener('click', () => {
    imgAnimation()    
    nextImg()    

})
previous.addEventListener('click', () => {
    imgAnimation()
    previousImg()
    
})

function imgAnimation(){
    imgfade.classList.add('fadeimg')
    setTimeout( function() {
        imgfade.classList.remove('fadeimg')
    }, 1000)

}
function nextImg() {
    imgCount++
    if(imgCount > myImg.length - 1){
        imgCount = 0
    }
    imgSrc()
}
function previousImg() {
    imgCount--
    if(imgCount < 0 ){
        imgCount = myImg.length -1
    }
    imgNow = 'now'
    imgSrc()
    
}
function imgSrc(){
    imgEl.src =  `img/${myImg[imgCount]}`
}