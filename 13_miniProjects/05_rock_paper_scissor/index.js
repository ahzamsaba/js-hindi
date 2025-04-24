const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')

const choiceBtns = document.querySelectorAll('.choiceBtn:not(#reset)')
let player
let computer
let result
let playerScore = parseInt(localStorage.getItem('playerScore')) || 0
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0
updateScoreBoard()

choiceBtns.forEach(button => button.addEventListener('click', () => {
    button.classList.add('btn-animate')
    setTimeout(() => {
        button.classList.remove('btn-animate')
    }, 200);
    
    player = button.textContent
    computerTurn()
    playerText.textContent = `Player : ${player}`
    computerText.textContent = `Computer : ${computer}`
    resultText.textContent = checkWinner()
    if(resultText.textContent == 'You Win!'){
        playerScore++
        saveScore()
    }
    else if(resultText.textContent == 'You Lose!'){
        computerScore++
        saveScore()
    }
}))

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1
    switch(randNum){
        case 1 :
            computer = 'ROCK'
            break
        case 2 :
            computer = 'PAPER'
            break
        case 3 : 
            computer = 'SCISSOR'
            break
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!"
    }
    else if(computer == 'ROCK'){
        return (player == 'PAPER' ? 'You Win!' : 'You Lose!')
    }
    else if(computer == 'PAPER'){
        return (player == 'SCISSOR' ? 'You Win!' : 'You Lose!')
    }
    else if(computer == 'SCISSOR'){
        return (player == 'ROCK' ? 'You Win!' : 'You Lose!')
    }
}

function saveScore(){
    localStorage.setItem('playerScore',playerScore)
    localStorage.setItem('computerScore',computerScore)
    updateScoreBoard()
}

function updateScoreBoard(){
    document.getElementById('scoreBoard').textContent = `Score - Player : ${playerScore} | Computer : ${computerScore}`
}

function resetScore(){
    playerScore = 0
    computerScore = 0
    saveScore()
}