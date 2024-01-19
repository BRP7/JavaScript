let value=3;
let negValue=-value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(8/4);
console.log(2**4);
console.log(2%2);


let str1="Hello ";
let str2="World";
let str3=str1+str2;
console.log(str3);

console.log(1 + "2");//it gives you 12 & not 3;
console.log("1" + 2);//it also gives you 12 & not 3;
console.log("1"+2+2);//122
console.log(1+2+"2");//32 1st sum will done on number & then merg with string.

console.log(+true);//1
console.log(+"");//0
// console.log(true+);//SyntaxError: Unexpected token ')' u cannot perform this operation

//+++++++++++++++++++++++++++++++Pre&PostFix+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let scorePre=100;
let incScrPre=++scorePre;
console.log(incScrPre);//101
console.log(scorePre);//101
let scorePost=100;
let incScrPost=scorePost++;
console.log(incScrPost);//100
console.log(scorePost);//101



