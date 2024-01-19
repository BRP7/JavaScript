//Dynamically Typed Launguage-JS

//Primitive-call by Value
//7 types:String,Number,Boolean,BigInt,Null,Undefined,Symbol
const score=100;
const scoreFl=100.4;
const str="Hello";
const Bool=true;
const outsideTemp=null;
let myScore;//u can't declare const variable undefine because you can't overwrite it afterwards,
const id=Symbol("123");
const anotherId=Symbol("123");//unique value even after passing same string
const bigNum=364626559340937690750n;

// console.log(id===anotherId);//false
console.log(typeof bigNum);//bigint

//Non-Primitive(ReferenceType)-call by Reference
//Array
//Object
//Function


const heros =["shaktiman","naagraj","doga"];

let user={
    name:"hitesh",
    age:18,
}

const player=function(p1){
    console.log("hello ",p1)
}

player("hitesh");

console.log(typeof player)//function or objectFunction



//++++++++++++++++++++++++++++++++++Memory+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (Primitive)
//Heap (Non-Primitive)

//stack (Primitive) --actual values are copied doesn't provides reference
let myName="Hitesh";
let anotherName=myName;
anotherName="Priya";
console.log(anotherName);//Priya
console.log(myName);//Hitesh


//Heap (Non-Primitive) -- reference is given not actual value 
let myObj={
    name:"hitesh",
    age:18
}
let anotherObj=myObj;
anotherObj.name="Priya";

console.log(anotherObj);//{ name: 'Priya', age: 18 }
console.log(myObj);//{ name: 'Priya', age: 18 }