console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


// convert string to number
console.log("2" > 1);
console.log("02" > 1);



// null
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
// comparisons >,<,<=,>= work differently as equality check ==
// because comparisons convert null to a number i.e;treat it as 0



// undefined
console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false
console.log(undefined <= 0);//false
console.log(undefined >= 0);//false



// === -> strict check => value and datatype
console.log("2" == 2);//true
console.log("2" === 2);//false

