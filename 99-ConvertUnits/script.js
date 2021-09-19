const selectMainUnit = document.getElementById('select-main-unit')
const selectSubUnit = document.querySelectorAll('.select-sub-unit')
const subUnitName01 = document.getElementById('subUnitName01')
const subUnitName02 = document.getElementById('subUnitName02')

const selectEl = document.querySelector('select')
const inputValue1 = document.getElementById('value01')
const inputValue2 = document.getElementById('value02')
let i = 0
const mainUnits = new Array(
    'Area',
    'Data transfer Rate',
    'Digital Storage',
    'Energy',
    'Frequency',
    'Fuel Economy',
    'Length',
    'Mass',
    'Plane Angle',
    'Pressure',
    'Speed',
    'Temperature',
    'Time',
    'Volume'
)

mainUnits.forEach((item) => {
    const option = document.createElement('option')
    option.text = item
    option.value = item
    selectMainUnit.appendChild(option)
})
const areaItems = new Array(
    'Square meter',
    'Square kilometer',
    'Square mile',
    'Square yard',
    'Square foot',
    'Square inch',
    'Hectare',
    'Acre'
)
// adding the first subUnits AREA

function createArrayOptions(array) {
    selectSubUnit.forEach((item) => {
        let option = document.createElement('option')
        option.value = array
        option.text = array
        item.appendChild(option)
    })
}
areaItems.forEach((item) => {
    createArrayOptions(item)
})
function CheckSelected() {
    subUnitName01.addEventListener('change', function (e) {
        e.preventDefault()
        if (subUnitName01.value === subUnitName02.value) {
            // console.log(unitName01.value) return celsius
            subUnitName02.options[
                ++i % subUnitName01.options.length
            ].selected = true
        }
    })
}
function removeOptions() {
    subUnitName01.innerHTML = ''
    subUnitName02.innerHTML = ''
}
function areaOptions() {
    areaItems.forEach((item) => {
        createArrayOptions(item)
    })
}
function lengthOptions() {
    lengthItems.forEach((item) => {
        createArrayOptions(item)
    })
}
function temperatureOptions() {
    temperatureItems.forEach((item) => {
        createArrayOptions(item)
    })
}

function timeOptions() {
    timeItems.forEach((item) => {
        createArrayOptions(item)
    })
}
const lengthItems = new Array(
    'Meter',
    'Kilometer',
    'Centimeter',
    'Miles',
    'Foot'
)
const timeItems = new Array(
    'Nonosecond',
    'Microsecond',
    'Millisencond',
    'Second',
    'Minute',
    'Hour',
    'Day',
    'Week',
    'Month',
    'Calendar Year',
    'Decades',
    'Century'
)
const temperatureItems = new Array('Celsius', 'Fahrenheit', 'Kelvin')

function selectUnit() {
    if (selectMainUnit.value == 'Length') {
        lengthOptions()
    } else if (selectMainUnit.value == 'Area') {
        areaOptions()
    } else if (selectMainUnit.value == 'Temperature') {
        temperatureOptions()
    } else if (selectMainUnit.value == 'Time') {
        timeOptions()
    }
}
selectMainUnit.addEventListener('change', (e) => {
    e.preventDefault()
    removeOptions()
    selectUnit()
    CheckSelected()
})

CheckSelected()

// function selectDefaultUnits() {
//     unitName01.selectedIndex = 0
//     unitName02.selectedIndex = 1
// }

// function temperatureFormulas(value) {
//     // for celsius in valueo1
//     if (option01 === celsius && option02 === faherenheit) {
//         // Formula	(0°C × 9/5) + 32 = 32°F
//         value = (value * 9) / 5 + 32
//     } else if (option01 === celsius && option02 === kelvin) {
//         //100°C + 273.15 = 373.15K
//         value = value + 273.15
//     }
//     // for faherenheit in value01
//     else if (option01 === faherenheit && option02 === celsius) {
//         // (100°F − 32) × 5/9 = 37.778°C
//         value = ((value - 32) * 5) / 9
//     } else if (option01 === faherenheit && option02 === kelvin) {
//         // (100°F − 32) × 5/9 + 273.15 = 310.928K
//         value = ((value - 32) * 5) / 9 + 273.15
//     }
// }

// function findFomula(value) {
//     if (value === temperature) {
//         temperatureFormulas(value)
//     }
// }

// function calValue() {
//     if (inputValue1) {
//         let total = findFomula(inputValue1)
//         inputValue2.appendChild(total)
//         return total
//     }
// }

// lengthOptions()
// calValue()
// CheckSelected()
