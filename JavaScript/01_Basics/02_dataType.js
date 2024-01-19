"use strict";//treat all js code as newer version 

//alert("hello"); ReferenceError: alert is not defined 
//we are using node js not browser 

console.log(3+3);//code readability should be high!

let name="dr";
let age=18;
let isLoggedIn=false;
let temp=null;


console.log(typeof(temp));//object
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof name);//string
console.log(typeof age);//number
console.log(typeof isLoggedIn);//boolean

//DataTypes
/*-----------------*/
//Primitive
/*-----------------*/
//number
//bigInt  
//string  - ""
//boolean - true/false
//null  - standalone value - representation of empty value - different from empty string ""; typeof->object
//undefine 
//symbol - to find uniqueness 

//Non-Primitive
/*-----------------*/
//object
//array
//function

