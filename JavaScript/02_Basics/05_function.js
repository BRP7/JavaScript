function greetingOne(){
    console.log("Hello World!")
}
// greeting()
function greetingTwo(){
    return "Hello World!"
}
const result=greetingTwo()
// console.log(result)


function add(num1, num2 ){
    // const sum=num1 + num2
    // return sum
    return num1+num2
}
// const sum=add()//NaN
// const sum=add(4,5)//9
// const sum=add("a",3)//a3
// const sum=add(4)//NaN
// console.log(sum)


function loginUserMessage(username="sammy"){
    // if(!username){
    //     return `Please enter user name`  
    // }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Hitesh"))//Hitesh just logged in
// console.log(loginUserMessage(""))// just logged in
// console.log(loginUserMessage())//undefined //just logged in without checking wheather user pass parameter or not

function calCartPrice(...num){
    return num
}

const price=calCartPrice(200,300,400)
// console.log(price)//[ 200, 300, 400 ]

function calCartPrice1(num){
    return num
}
const price1=calCartPrice1(200,300,400)
// console.log(price1)//200

function calCartPrice2(val1,val2,...num){
    return val1,val2,num
}

const price2=calCartPrice2(200,300,400)
// console.log(price2)//[400]


function objFun(anyObj){
    console.log(anyObj.name)
}

const user={
    name:"Hitesh",
    age:18
}

// objFun(user)
// objFun({name:"RK"})

function getArray(arr){
    console.log(arr)
}

const a1=[1,2,3,4,5]
getArray(a1)
getArray([5,5,6,7,8,9,10])