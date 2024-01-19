const desc=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(desc)
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/



// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

// const myObj = Object.create(null)

const chai = {
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderChai: function(){
        console.log("chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})


for(let [key,val] of Object.entries(chai)){
    if(typeof val !== 'function'){
        console.log(key+"-"+val)
    }
}
/*price-250//name was not enumerable 
isAvailable-true
*/