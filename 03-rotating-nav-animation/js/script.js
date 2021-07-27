const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEvetListener('click', () => container.classList.add('show-nav'))

close.addEvetListener('click', () => container.classList.remove('show-nav'))