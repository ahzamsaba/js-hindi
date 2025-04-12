# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-1szvwspc?file=7-scroll%2Fchaiaurcode.js)

# Solution Code

## project 1 -> Color Changer

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  // console.log(button)
  button.addEventListener('click',function(e){
    // console.log(e.target)
    const color = e.target.id
    body.style.backgroundColor = color
    // switch(color){
    //   case 'grey':
    //     body.style.backgroundColor = color
    //   default 
    // }
  })
});
```


## project 2 -> BMI Calc
```javascript
const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value) -> this usecase will give you empty value

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const message = document.querySelector('#message')
  
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
  } else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    results.innerHTML = `<span>BMI : ${bmi}</span>`
    if(bmi < 18.6)
      message.innerHTML = `<span>You are under weight</span>`
    else if(bmi>18.6 && bmi<24.9)
      message.innerHTML = `<span>You are in normal range</span>`
    else
    message.innerHTML = `<span>You are over weight</span>`
  }
})
```

## project 3 -> Digital Clock
```javascript
// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toTimeString())
  clock.innerHTML = date.toLocaleTimeString()
} , 1000)
```

## project 4 -> Guess the Number
```javascript
let randNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess))
    alert('Please enter a valid number')
  else if(guess<1 || guess>100)
    alert('Please enter number in range')
  else{
    prevGuess.push(guess)
    if(numGuess > 10){
      displayGuess(guess)
      displayMessage(`Game Over! Random number was ${randNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randNumber){
    displayMessage(`Hooray!!! You guessed it right`)
  }
  else if(guess < randNumber){
    displayMessage(`Guess higher`)
  }
  else if(guess > randNumber){
    displayMessage(`Guess lower`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += ` ${guess}`
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click' , function(e){
    randNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    
    playGame = true
  })
}
```

## project 5 -> Keyboard Check
```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>Key Code</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `
})
```

## project 6 -> Unlimited Colors
```javascript
const randColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

let intervalId = null 

const startChangingColor = function(){
  if(intervalId==null){
    intervalId = setInterval(changeBgColor,1000) 
  }
  function changeBgColor(){
    document.body.style.backgroundColor = randColor()
  }
}

const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null
}

document.getElementById('start').addEventListener('click',startChangingColor)

document.getElementById('stop').addEventListener('click',stopChangingColor)
```