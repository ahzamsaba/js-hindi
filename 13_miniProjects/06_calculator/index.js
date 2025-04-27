const display = document.getElementById('display')
const keys = document.getElementById('keys')
const historyScreen = document.getElementById('history-screen')
const historyList = document.getElementById('history-list')
let e = false

function appendToDisplay(input){
    if(e){
        e = false
        display.value = ''
    }
    display.value += input;
    display.scrollLeft = display.scrollWidth
}

function clearDisplay(){
    display.value = ''
}

function calculate(){
    try{
        const exp = display.value
        const res = eval(exp)
        display.value = res

        saveToHistory(exp + ' = ' + res)
        display.scrollLeft = display.scrollWidth
    }
    catch(error){
        e = true
        display.value = "Error"
        display.scrollLeft = display.scrollWidth
    }
}

function saveToHistory(entry){
    let history = JSON.parse(localStorage.getItem('history')) || []
    history.push(entry)
    localStorage.setItem('history',JSON.stringify(history))
}

function showHistory(){
    display.style.display = 'none'
    keys.style.display = 'none'
    historyScreen.style.display = 'block'
    loadHistory()
}

function loadHistory(){
    historyList.innerHTML = ''
    let history = JSON.parse(localStorage.getItem('history')) || []
    history.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        historyList.appendChild(li)
    })
}

function clearHistory(){
    localStorage.removeItem('history')
    loadHistory()
}

function backToCalculator(){
    display.style.display = 'block'
    keys.style.display = 'grid'
    historyScreen.style.display = 'none'
}

document.addEventListener('keydown',function(event){
    const key = event.key

    if(isFinite(key) || key === '.')
        appendToDisplay(key)
    else if(key === '+' || key === '-' || key === '*' || key === '/')
        appendToDisplay(key)
    else if(key === 'Enter' || key === '=')
        calculate()
    else if(key.toLowerCase() === 'c')
        clearDisplay()
})