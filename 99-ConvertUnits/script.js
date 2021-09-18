const selectUnitEl = document.getElementById('select-unit')
const unitName01 = document.getElementById('unit-name01')
const unitName02 = document.getElementById('unit-name02')
const unitNameBoxes = document.querySelectorAll('.unit-name')
const selectEl = document.querySelector('select')
let i = 0
function lengthOptions() {
    lengthItems.forEach((item) => {
        createOption(item)
    })
}
const lengthItems = ['Meter', 'Kilometer', 'Centimeter', 'Miles', 'Foot']

function createOption(array) {
    unitNameBoxes.forEach((item) => {
        let option = document.createElement('option')
        option.value = array[i]
        option.text = array
        item.appendChild(option)
    })
}
function removeOptions() {
    unitName01.innerHTML = ''
    unitName02.innerHTML = ''
}
lengthOptions()

selectUnitEl.addEventListener('change', (e) => {
    e.preventDefault()
    removeOptions()
    if (selectUnitEl.value == 'length') {
        lengthOptions()
    } else if (selectUnitEl.value == 'area') {
        areaOptions()
    } else if (selectUnitEl.value == 'temperature') {
        temperatureOptions()
    } else if (selectUnitEl.value == 'time') {
        timeOptions()
    }
})

const areaItems = [
    'Square meter',
    'Square kilometer',
    'Square mile',
    'Square yard',
    'Square foot',
    'Square inch',
    'Hectare',
    'Acre',
]

function areaOptions() {
    areaItems.forEach((item) => {
        createOption(item)
    })
}
const temperatureItems = ['Celsius', 'Fahrenheit', 'Kelvin']

function temperatureOptions() {
    temperatureItems.forEach((item) => {
        createOption(item)
    })
}
const timeItems = [
    'Nonosencond',
    'Microsencond',
    'Millisencond',
    'Second',
    'Minute',
    'Hour',
    'Day',
    'Week',
    'Month',
    'Calendar Year',
    'Decades',
    'Century',
]

function timeOptions() {
    timeItems.forEach((item) => {
        createOption(item)
    })
}
