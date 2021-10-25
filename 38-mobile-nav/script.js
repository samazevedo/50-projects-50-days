const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('li')
console.log(listItems)

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllContent()
        hideAllItems()

        item.classList.add('active')
        contents[index].classList.add('show')
    })
})
function hideAllContent() {
    contents.forEach((content) => {
        content.classList.remove('show')
    })
}
function hideAllItems() {
    listItems.forEach((item) => {
        item.classList.remove('active')
    })
}
