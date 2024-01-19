const user={
    username:"Hitesh",
    loginCount:8,
    signedIn:true,

    getUser:function(){
        console.log(this)
        // console.log(this.username)
    }
}
// console.log(user.username)
// console.log(user.getUser())
// console.log(user)
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    // return this//implicit return so no need to write

    this.greeting = function(){
        console.log(`welcom ${this.username}`)
    }
}

// const userOne= User("userOne",8,false)// this will overwrite the previous object data also gives lots of information
// const userTwo= User("userTwo",9,true)

const userOne=new User("userOne",8,false)//when new keyword doesn't use it overwrite the previous object data 
const userTwo=new User("userTwo",9,true)

// console.log(userOne)
console.log(userOne.constructor)//[Function: User]
// console.log(userTwo)
/*User {
    username: 'userTwo',
    loginCount: 9,
    isLoggedIn: true,
    greeting: [Function (anonymous)]
  } */