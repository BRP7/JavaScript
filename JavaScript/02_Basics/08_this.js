/* This Use to Define or Reference Current Context */

const user={
    name:"Hitesh",
    age:38,
    welcome:function(){
        // console.log(`${this.name},Welcome to the Website`)
        // console.log(`${name},Welcome to the Website`)//ReferenceError: name is not defined
    }
}
user.welcome();

// console.log(this)//{} in node
// console.log(this)//Window Object in Browser
function chai(){
    let username = "hitesh"
    console.log(this.username)//undefined
    console.log(this)// Object [global] 
       
}
chai()

const addTwo = (num1 , num2 ) =>num1 +num2
// const addTwo = (num1 , num2 ) =>(num1 +num2)
// const addTwo = (num1 , num2 ) =>{ return   num1 +num2}

console.log(addTwo(9,8))
const objFun = () =>({name:"Hitesh"})
