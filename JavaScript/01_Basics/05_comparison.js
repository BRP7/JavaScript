// console.log(2>2);
// console.log(2>=2);
// console.log(2<2);
// console.log(2<=2);
// console.log(2==2);
// console.log(2!=2);

console.log("2">1); //true
console.log("02">1); //true

console.log(null > 0); //false comparision converts null to number zero so 1 is wrong and 3 is right in that sense
console.log(null == 0); //false == work differently then <,>,>= 
console.log(null >= 0); //true 

console.log(undefined == 0); //false
console.log(undefined == 0); //false 
console.log(undefined == 0); //false 

//Avoid This Type Of Null & Undefined Conversion Write Clean Coad.

//++++++++++++++++++++++++++++++++++++++++++++++Strick-Cheak+++++++++++++++++++++++++++++++++++++++++++++++++++++
//== just compare value && === compare dataType && Value.
console.log("2"==2);//true
console.log("2"===2);//false
