# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-1szvwspc?file=7-scroll%2Fchaiaurcode.js)

# Solution Code

## project 5 -> Keyboard Magic
```javascript
// console.log('Project 5');
document.addEventListener('keydown', (e) => {
  const insert = document.getElementById('insert');
  insert.innerHTML = `
  <table>
    <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Event Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  `;
});
```

## project 6 -> Unlimited Colors
```javascript
let intervalId

const startChangingColor = () => {
  if(!intervalId){
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    },1000)
  }
}

const stopChangingColor = () => {
  clearInterval(intervalId)
  intervalId = null
}

document.getElementById('start').addEventListener('click',startChangingColor)
document.getElementById('stop').addEventListener('click',stopChangingColor)
```

## project 7 -> Scroll Indicator
```javascript
window.addEventListener("scroll", () => {
  const scrollIndicator = document.getElementsByClassName('progress')[0]
  if(!scrollIndicator) return

  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  const scrollPercentage = (scrollTop / scrollHeight) * 100

  scrollIndicator.style.width = scrollPercentage + "%"
})
```