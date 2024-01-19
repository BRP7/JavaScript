username="Hitesh"
if(username=="Hitesh"){
    // console.log("WelCome")
}

const price=1200

// if(price<500){
//     console.log("less then 500")
// }
// else if(price<700){
//     console.log("less then 700")
// }
// else if(price<900){
//     console.log("less then 900")
// }
// else if(price<1200){
//     console.log("less then 1200")
// }
// else{
//     console.log("greater than 1200")
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const mon="jan"//if you don't write break after case ends it will execute all the below statment(until it encounter another Break) with default without condition checking
switch (mon) {
    case "jan":
        // console.log("Jan")
        break;
    case "feb":
        // console.log("Feb")
        break;
    case "mar":
        // console.log("Mar")
        break;
    case "april":
        // console.log("Apr")
        break;

    default:
        // console.log("Default Case")
        break;
}

//&& and ||
const userLoggedIn=true
const debitcard=true
const emailLoggedIn=true

if(userLoggedIn && debitcard && 2==2){
    // console.log("Allow to buy course")
}
if((userLoggedIn || emailLoggedIn ) && debitcard) {
    // console.log("Allow to buy course")
}
//Truthy & Falsy values 
// Falsy - false,0,-0,bigint on,"",null,NaN,undefine
//Truthy - "0","false"," ",[],{},function(){}
//null collision operator for null & undefinied

// to check wheather array or object is empty or not
let arrname=[]
let user={}
if(arrname.length==0){
    console.log("Empty")
}
if(Object.keys(user)==0){
    console.log("Empty")
}

//Nullish Coalescing Operator(??): null & undefined
const val=null??10??20
const val1=null??undefined??20
// console.log(val)
// console.log(val1)

//Terniary Operator
//condition ? true : false

const teaPrice=100
teaPrice >= 80 ?console.log("more then 80") :console.log("less then 80")
