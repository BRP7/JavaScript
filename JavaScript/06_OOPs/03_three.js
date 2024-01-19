let myName = "Hitesh"
// console.log(myName.trueLength)

let myHero=["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all Object`)
}
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}
// heroPower.hitesh()
// myHero.hitesh()
// myHero.heyHitesh()
//heroPower.heyHitesh()//heroPower.heyHitesh()    TypeError: heroPower.heyHitesh is not a function


const User={
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo:true
}

const TeacherSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime:true,
    __proto__:TeacherSupport
}

Teacher.__proto__=User

//Morden Syntax
Object.setPrototypeOf(TeacherSupport,Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`)//refers to the calling Object //ChaiAurCode    
    console.log(`${this.name}`)//undefine
    console.log(`True length is: ${this.trim().length}`)//True length is: 11
}

anotherUsername.trueLength()
"Hitesh".trueLength()
"Nimesh     ".trueLength()
