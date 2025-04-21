let restartInterval;
const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartButton = document.querySelector("#restartButton")
const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options = ["","","","","","","","",""]
let currentPlayer = 'X'
let running = false

let scoreX = 0
let scoreO = 0

let playerXName = "Player X"
let playerOName = "Player O"

const nameFormContainer = document.getElementById('nameFormContainer')
const nameForm = document.getElementById('nameForm')

nameForm.addEventListener('submit',function(e){
    e.preventDefault()
    playerXName = document.getElementById('playerXInput').value || 'Player X'
    playerOName = document.getElementById('playerOInput').value || 'Player O'
    
    document.getElementById('playerXName').textContent = `${playerXName}(X)`
    document.getElementById('playerOName').textContent = `${playerOName}(O)`

    nameFormContainer.style.display = 'none'
    initializeGame()
})

// initializeGame()

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked))
    restartButton.addEventListener("click",restartGame)
    const resetAllButton = document.querySelector("#resetAllButton")
    resetAllButton.addEventListener("click",resetAll)
    statusText.textContent = `${currentPlayer === 'X' ? playerXName : playerOName}'s turn`
    running = true
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex")
    if(options[cellIndex] != "" || !running){
        return
    }
    updateCell(this,cellIndex)
    checkWinner()
}

function updateCell(cell,index){
    options[index] = currentPlayer
    cell.textContent = currentPlayer
}

function changePlayer(){
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    statusText.textContent = `${currentPlayer === 'X' ? playerXName : playerOName}'s turn`
}

function checkWinner(){
    let roundOne = false
    for(let i=0;i<winCondition.length ;i++){
        const condition = winCondition[i]
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        if(cellA == "" || cellB == "" || cellC == "")
            continue;
        if(cellA == cellB && cellB == cellC){
            roundOne = true
            if(currentPlayer === 'X'){
                scoreX++
                document.getElementById('scoreX').textContent = scoreX
            }
            else{
                scoreO++
                document.getElementById('scoreO').textContent = scoreO
            }

            break
        }
    }
    if(roundOne){
        statusText.textContent = `${currentPlayer === 'X' ? playerXName : playerOName} wins`
        running = false
        startRestartTimer()
    }
    else if(!options.includes("")){
        statusText.textContent = "Draw!!"
        running = false
    }
    else{
        changePlayer()
    }
}

function restartGame(){
    clearInterval(restartInterval)
    currentPlayer = "X"
    options = ["","","","","","","","",""]
    statusText.textContent = `${currentPlayer}'s turn`
    cells.forEach(cell => cell.textContent = "")
    running = true
}

function startRestartTimer(){
    let countdown = 10
    restartInterval = setInterval(() => {
        countdown--
        statusText.textContent = `${currentPlayer} wins - Restarting in ${countdown}s...`
        if(countdown<=0){
            clearInterval(restartInterval)
            restartGame()
        }
    }, 1000);
}


function resetAll(){
    clearInterval(restartInterval)
    scoreX = 0
    scoreO = 0
    document.getElementById('scoreX').textContent = scoreX
    document.getElementById('scoreO').textContent = scoreO

    document.getElementById('playerXInput').value = ''
    document.getElementById('playerOInput').value = ''
    document.getElementById('playerXName').textContent = "Player X"
    document.getElementById('playerOName').textContent = "Player O"
    playerXName = "Player X"
    playerOName = "Player O"

    nameFormContainer.style.display = 'block'
    restartGame()
}