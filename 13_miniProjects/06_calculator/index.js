const display = document.getElementById('display')
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
        display.value = eval(display.value)
        display.scrollLeft = display.scrollWidth
    }
    catch(error){
        e = true
        display.value = "Error"
        display.scrollLeft = display.scrollWidth
    }
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