const gameBoard = document.getElementById('gameBoard')
const ctx = gameBoard.getContext("2d")
const scoreText = document.getElementById('scoreText')
const resetBtn = document.getElementById('resetButton')
const gameWidth = gameBoard.width
const gameHeight = gameBoard.height
const boardBackground = "#1a1a1a"
const snakeColor = "#32cd32"
const snakeBorder = "white"
const foodColor = "#ff0000"
const unitSize = 25
let running = false
let xVelocity = unitSize
let yVelocity = 0
let foodX
let foodY
let score = 0
let snake = [
    
    {x:unitSize*4, y:0},
    {x:unitSize*3, y:0},
    {x:unitSize*2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
]

let speed = 150
const speedIncrement = 5
const minSpeed = 50

window.addEventListener("keydown",changeDirection)
resetBtn.addEventListener("click",resetGame)


let playerName = "Player"
const nameFormContainer = document.getElementById('nameFormContainer')
const nameForm = document.getElementById('nameForm')

nameForm.addEventListener('submit',function(e){
    e.preventDefault()
    playerName = document.getElementById('playerInput').value || 'Player'

    document.getElementById('playerName').textContent = playerName
    nameFormContainer.style.display = 'none'
    gameStart()
})

// gameStart()

function gameStart(){
    running = true
    scoreText.textContent = score
    createFood()
    drawFood()
    nextTick()
}

function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard()
            drawFood()
            moveSnake()
            drawSnake()
            checkGameOver()
            nextTick()
        }, speed);
    }
    else{
        displayGameOver()
    }
}

function clearBoard(){
    ctx.fillStyle = boardBackground
    ctx.fillRect(0,0, gameWidth, gameHeight)
    
}

function createFood(){
    function randomFood(min,max){
        const randNum = Math.round((Math.random() * (max-min) + min) / unitSize) * unitSize
        return randNum
    }
    foodX = randomFood(0,gameWidth-unitSize)
    foodY = randomFood(0,gameWidth-unitSize)
    // console.log(foodX);
    
}

function drawFood(){
    ctx.fillStyle = foodColor
    ctx.fillRect(foodX, foodY, unitSize, unitSize)
}

function moveSnake(){
    const head = {x:snake[0].x + xVelocity,
                  y:snake[0].y + yVelocity}
    
    if(head.x < 0)
        head.x = gameWidth - unitSize
    else if(head.x >= gameWidth)
        head.x = 0
    
    if(head.y < 0)
        head.y = gameHeight - unitSize
    else if(head.y >= gameHeight)
        head.y = 0

    

    snake.unshift(head)
    // if food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
        score++
        scoreText.textContent = score
        createFood()
        if(speed > minSpeed)
            speed -= speedIncrement
    }
    else{
        snake.pop()
    }
}

function drawSnake(){
    ctx.fillStyle = snakeColor
    ctx.strokeStyle = snakeBorder
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
}

function changeDirection(){
    const keyPressed = event.keyCode
    // console.log(keyPressed);
    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40
    const goingUp = (yVelocity == -unitSize)
    const goingDown = (yVelocity == unitSize)
    const goingRight = (xVelocity == unitSize)
    const goingLeft = (xVelocity == -unitSize)

    switch(true){
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize
            yVelocity = 0
            break
        case(keyPressed == UP && !goingDown):
            xVelocity = 0
            yVelocity = -unitSize
            break
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize
            yVelocity = 0
            break
        case(keyPressed == DOWN && !goingUp):
            xVelocity = 0
            yVelocity = unitSize
            break
        
    }
}

function checkGameOver(){
    switch(true){
        case(snake[0].x < 0):
            running = false
            break
        case(snake[0].x >= gameWidth):
            running = false
            break
        case(snake[0].y < 0):
            running = false
            break
        case(snake[0].y >= gameWidth):
            running = false
            break
    }

    for(let i=1;i<snake.length;i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false
        }
    }
}

function displayGameOver(){
    ctx.font = "40px MV Boli"
    ctx.fillStyle = "aliceblue"
    ctx.textAlign = "center"
    ctx.fillText(`${playerName}, GAME OVER!`, gameWidth/2, gameHeight/2)
    running = false
}

function resetGame(){
    score = 0
    xVelocity = unitSize
    yVelocity = 0
    speed = 150
    running = false
    snake = [ 
        {x:unitSize*4, y:0},
        {x:unitSize*3, y:0},
        {x:unitSize*2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ]

    clearBoard()
    const playerNameA = document.getElementById('playerName')
    if(playerNameA) playerNameA.textContent = ''

    // gameStart()
    nameFormContainer.style.display = 'block'
    document.getElementById('playerInput').value = ''
}

function clearBoard(){
    ctx.fillStyle = boardBackground
    ctx.fillRect(0,0, gameWidth, gameHeight)
}