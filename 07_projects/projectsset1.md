# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ye63yc28?file=index.html)

# Solution Code

## project 1

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


## project 2
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

## project 3
```javascript
// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toTimeString())
  clock.innerHTML = date.toLocaleTimeString()
} , 1000)
```