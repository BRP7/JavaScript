function setUserName(username){
    this.username=username
    console.log("called!")
}

function createUser(username,email,password){
    // setUserName(username)
    setUserName.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createUser("chai","chai@gmail.com",123)
console.log(chai)//createUser { email: 'chai@gmail.com', password: 123 } doesn't able to set username function
                 // definatly called but due to reference problem unable to set so use call