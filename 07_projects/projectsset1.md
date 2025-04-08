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