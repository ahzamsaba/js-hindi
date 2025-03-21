const coding = ["js","cpp","java","python"]

coding.forEach( function (item) {
    // console.log(item);
} )
// js
// cpp
// java
// python

coding.forEach( (val) => {
    // console.log(val)
})
// js
// cpp
// java
// python


function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)
// js
// cpp
// java
// python


coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
} )
// js 0 [ 'js', 'cpp', 'java', 'python' ]
// cpp 1 [ 'js', 'cpp', 'java', 'python' ]
// java 2 [ 'js', 'cpp', 'java', 'python' ]
// python 3 [ 'js', 'cpp', 'java', 'python' ]



const myCoding = [
    {
        langName : "javascript",
        langFileName : "js"
    },
    {
        langName : "java",
        langFileName : "java"
    },
    {
        langName : "Python",
        langFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.langFileName} :-> ${item.langName}`);
} )
// js :-> javascript
// java :-> java
// py :-> Python