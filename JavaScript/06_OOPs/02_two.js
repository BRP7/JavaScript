function mulByFive(num){
    return num*5
}
mulByFive.power = 2//Because Internally function is an Object it self infact Everything in js is object
// console.log(mulByFive(5))//25
// console.log(mulByFive.power)//2
// console.log(mulByFive.prototype)//{}


function createUser(username, score){
    this.username=username
    this.score=score
}
createUser.prototype.increment=function(){
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`Score is : ${this.score}`)
}
const chai = new createUser("chai", 25)
const tae = new createUser("tea", 250)

// console.log(chai)
// console.log(tae)
console.log(chai.increment())//undefine
tae.printMe()
