const timeDisplay = document.getElementById('timeDisplay')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const resetBtn = document.getElementById('resetBtn')
const lapBtn = document.getElementById('lapBtn')
const lapList = document.getElementById('lapList')

let startTime = 0
let elapsedTime = 0
let paused = true
let intervalId;
let hrs = 0
let mins = 0
let secs = 0
let ms = 0

let lapCount = 0
let lastLapTime = 0

startBtn.addEventListener('click',() => {
    if(paused){
        paused = false
        startTime = Date.now() - elapsedTime
        intervalId = setInterval(updateTime,10)
    }
})

pauseBtn.addEventListener('click',() => {
    if(!paused){
        paused = true
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId)
    }
})

resetBtn.addEventListener('click',() => {
    paused = true
    clearInterval(intervalId)
    startTime = 0
    elapsedTime = 0
    lapCount = 0
    lastLapTime = 0
    lapList.innerHTML = ""
    
    updateDispaly(0,0,0,0)
})

lapBtn.addEventListener('click',() => {
    if(!paused){
        lapCount++
        const lapElapsed = elapsedTime - lastLapTime
        lastLapTime = elapsedTime

        const total = formatTime(elapsedTime)
        const lap = formatTime(lapElapsed)

        const row = document.createElement('tr')
        row.innerHTML=`
            <td>${lapCount}</td>
            <td>${lap}</td>
            <td>${total}</td>
        `
        lapList.prepend(row)
    }
})

function updateTime(){
    elapsedTime = Date.now() - startTime
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
    mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    secs = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    ms = Math.floor((elapsedTime % 1000) / 10)

    updateDispaly(hrs,mins,secs,ms)    
}

function updateDispaly(h,m,s,ms){
    timeDisplay.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(ms)}`
}

function pad(unit){
    return unit < 10 ? '0' + unit : unit
}

function formatTime(ms){
    let hrs = Math.floor(ms / (1000 * 60 * 60));
    let mins = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((ms % (1000 * 60)) / 1000);
    let msec = Math.floor((ms % 1000) / 10);

    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}:${pad(msec)}`;
}

document.addEventListener('keydown',(event) => {
    const key = event.key.toLowerCase()
    if(key === 's')
        startBtn.click()
    else if(key === 'p')
        pauseBtn.click()
    else if(key === 'r')
        resetBtn.click()
    else if(key == 'l')
        lapBtn.click()
    else if(event.code === "Space"){
        if(paused)
            startBtn.click()
        else
            pauseBtn.click()
    }
})