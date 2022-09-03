const addButton = document.getElementById('add')
const weekButton = document.getElementById('week')
const monthButton = document.getElementById('month')
const yearButton = document.getElementById('year')
const lifetimeButton = document.getElementById('lifetime')
const dateInput = document.getElementById('date')
const numberInput = document.getElementById('weightdata')
let dataLabel = document.getElementById('data-label')


function addData(){
    console.log('added new data')
    dataLabel= dateInput


}

addButton.addEventListener('click', addData)
