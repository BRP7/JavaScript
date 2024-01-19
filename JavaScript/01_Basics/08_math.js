const score=400;
// console.log(score);//400

const balance=new Number(100)
// console.log(balance);//[Number: 100]

console.log(balance.toString.length);
// console.log(balance.toFixed(2));//100.00

const anotherNo=23.45737;
// console.log(anotherNo.toPrecision(4));//23.46

const hundreds=100000;
// console.log(hundreds.toLocaleString('en-US'));//US Standard 100,000
// console.log(hundreds.toLocaleString('en-IN'));//Indian Standard 1,00,000


//++++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math)//Object [Math] {}
// console.log(Math.abs(-4))//4
// console.log(Math.abs(4))//4
// console.log(Math.round(4.6))//5
// console.log(Math.ceil(4.2))//5
// console.log(Math.floor(4.9))//4
// console.log(Math.max(1,3,7,9,8))//9
// console.log(Math.min(6,8,9,3,2,1))//1
// console.log(Math.PI)//3.141592653589793


console.log((Math.floor(Math.random()*10))+1)//generate random number between 1-10

const min=10
const max=20
const randomNo=(Math.floor(Math.random() * (max - min +1 ))) + min//generate random number between min-max
console.log(randomNo)
