// console.log("Hello World!");

const accId=123454;
let accEmail="hitesh@google.com";
var accPass="Easdft";//scope problem {}
accCity="Jaipur";//scope problem {}
let accState;

//accId=2  TypeError: Assignment to constant variable.

console.log(accId);
console.log(accPass);
console.log(accEmail);
console.log(accCity);
console.log(accState);

accEmail="prk@gmail.com"
accCity="Bengaluru"
accPass="131335"

console.table([accEmail,accId,accPass,accCity]);
/* prefer not to use var because of issue in block scope & functional scope  */

