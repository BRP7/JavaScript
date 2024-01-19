class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }

   static createdId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    
    addCourse(){
        console.log(`new course was added by ${this.username}`)
    }
}

const chai=new Teacher("chai","chai@gmail.com",123)//new course was added by chai
const masalaChai=new User("masalaChai")
chai.addCourse()
// masalaChai.addCourse()//TypeError: masalaChai.addCourse is not a function Because Parent class cannot access prop of chaild class
masalaChai.logMe()

// console.log(chai === masalaChai)//false
// console.log(chai instanceof Teacher)//true
// console.log(chai instanceof User)//true

const hitesh = new User("hitesh")
// console.log(hitesh.createdId)//[Function: createdId]
// console.log(hitesh.createdId())//123 Before static declaration
// console.log(hitesh.createdId())//After declare it as static TypeError: hitesh.createdId is not a function
console.log(masalaChai.createdId())//TypeError: masalaChai.createdId is not a function