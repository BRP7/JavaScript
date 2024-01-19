let score="33";
let scoreA="33abc";// This can't be converted to Number!!!
let ScoreN=null;
let scoreBoo=true;
let scoreUn=undefined;

console.log(typeof score);
console.log(typeof scoreA);


let valueInNumber=Number(score);
let valueInNumberA=Number(scoreA);
let valueInNumberN=Number(ScoreN);
let valueInNumberBoo=Number(scoreBoo);
let valueInNumberUn=Number(scoreUn);


console.log(typeof valueInNumber);//number
console.log(typeof valueInNumberA);//Still doesn't give you Error!!! //number
console.log(valueInNumberA);//NaN
console.log(typeof valueInNumberN);//Sucessfully converted into Zero what if you are matching it with ZERO!!! //number
console.log(valueInNumberN);//zero(0)
console.log(typeof valueInNumberBoo);//Sucessfully converted into one incase of TRUE & Zero in case of FALSE what if you are matching it with ZERO!!! //number
console.log(valueInNumberBoo);//One(1)
console.log(typeof valueInNumberUn);//number
console.log(valueInNumberUn);//NaN


let isLoggedIn=1;
let emp="";
let someStr="Hiesh"

let boolLoggedIn=Boolean(isLoggedIn);
let boolEmp=Boolean(emp);
let boolSomeStr=Boolean(someStr);
console.log(boolLoggedIn);//true
isLoggedIn=0;
boolLoggedIn=Boolean(isLoggedIn);
console.log(boolLoggedIn);//false
console.log(boolEmp);//false
console.log(boolSomeStr);//true


let someNum=33;
let strNum=String(someNum);
console.log(typeof strNum);//String
console.log(strNum);//33