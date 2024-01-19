//singleton(object which are constructed using constructor)

//two ways to declare Obj
//1.object literals 2.object.create using constructor(singleton object)

//object literals 
const mySym = Symbol("key1")
const jsUser={
    name:"Hitesh",
    "full name":"Rajvi Thakkar",
     [mySym]:"myValue",
    age:23,
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Wednesday"]
}

//Access Object 
console.log(jsUser)
console.log(jsUser.email)//abc@gmail.com
console.log(jsUser["full name"])//Rajvi Thakkar//to access this you must have to use [" "] syntex
console.log(jsUser[mySym])//myValue
console.log(jsUser["lastLoggedInDays"])//[ 'Monday', 'Wednesday' ]
console.log(jsUser["lastLoggedInDays"][1])//Wednesday

//Modify Object
jsUser.email="priya@google.com"
console.log(jsUser.email)//priya@google.com


//freeze An Object so Change won't propogate upwards 
// Object.freeze(jsUser)
jsUser.age=20
console.log(jsUser)// age: 23,no change will propogated

jsUser.greeting=function(){
    console.log("Hello")
}
jsUser.greeting2=function(){
    console.log(`Hello ${this.name}`)
}

// console.log(jsUser.greeting)//[Function (anonymous)] only referance is passed.
jsUser.greeting()
jsUser.greeting2()


//2nd lecture Object
const user=new Object()//{}
// const user={}

user.id="123abc"
user.name="sammy"
user.isLoggedIn=false

console.log(user)//{ id: '123abc', name: 'sammy', isLoggedIn: false }

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rajvi",
            lastname:"Thakkar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)//Rajvi

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={4:"a",5:"b"}

const obj3={obj1 , obj2}
console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj5=Object.assign({},obj1,obj2,obj4)
console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6={...obj1,...obj2,...obj4}
console.log(obj6)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'a', '5': 'b' }

const usersData = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    }
]

console.log(usersData[1].id)//2

console.log(Object.keys(jsUser))//returns an array of keys
console.log(Object.values(jsUser))//returns an array of Values
console.log(Object.entries(jsUser))//returns a key-value pair in array
/* 
[
 'Hitesh','Rajvi Thakkar',20,'priya@google.com',false,[ 'Monday', 'Wednesday' ],
 [Function (anonymous)],[Function (anonymous)]
]
*/
/*
[
  [ 'name', 'Hitesh' ],
  [ 'full name', 'Rajvi Thakkar' ],
  [ 'age', 20 ],
  [ 'email', 'priya@google.com' ],
  [ 'isLoggedIn', false ],
  [ 'lastLoggedInDays', [ 'Monday', 'Wednesday' ] ],
  [ 'greeting', [Function (anonymous)] ],
  [ 'greeting2', [Function (anonymous)] ]
]
*/

console.log(user.hasOwnProperty("email"))//false


