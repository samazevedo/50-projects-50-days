const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMsg = document.querySelector('.final')
const play = document.getElementById('play')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMsg.classList.remove('show')

    nums.forEach((numItem) => {
        numItem.classList.value = ''
    })
    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((numItem, index) => {
        const nextToLast = nums.length - 1

        numItem.addEventListener('animationend', (e) => {
            if (e.animationName == 'goIn' && index !== nextToLast) {
                numItem.classList.remove('in')
                numItem.classList.add('out')
            } else if (
                e.animationName === 'goOut' &&
                numItem.nextElementSibling
            ) {
                numItem.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMsg.classList.add('show')
            }
        })
    })
}

play.addEventListener('click', resetDOM)
