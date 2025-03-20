// for

for (let index = 0; index < 3; index++) {
    const element = index;
    // console.log(element);
}//0
// 1
// 2

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(i + ' * ' + j + ' = ' + (i*j));
         
    }    
}

let myArr = ["Flash","Storm","Wolverine"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}
// Flash
// Storm
// Wolverine



// BREAK and CONTINUE

// for (let i = 1; i < 21; i++) {
//     if(i == 3){
//         console.log(`Detected ${i}`);
//         break;
//     }

//     console.log(`Value = ${i}`);   
// }
// Value = 1
// Value = 2
// Detected 3

for (let i = 1; i < 5; i++) {
    if(i == 3){
        console.log(`Detected ${i}`);
        continue
    }
    console.log(`Value = ${i}`);   
}
// Value = 1
// Value = 2
// Detected 3     ->come out of ith iteration & continue
// Value = 4