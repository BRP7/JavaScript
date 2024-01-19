class User{
    constructor(username,email){
        this.username=username
        this.email=email
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        this._username=value
    }
}

const hitesh = new User("hitesh","hitesh@ai.com")
console.log(hitesh.username)
console.log(hitesh.email)