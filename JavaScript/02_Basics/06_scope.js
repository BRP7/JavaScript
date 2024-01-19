if(true){
    const a=10
    let b=20
    var c=30
}

// console.log(a)// a is not defined
// console.log(b)// b is not defined
// console.log(c)//30

function scopeFun(){
    const userName="Hitesh";
    function insideFun(){
        const website="YouTube"
        // console.log(userName)
    }
    // console.log(website)//website is not defined
    insideFun()
}
scopeFun()

if(true){
    const username = "hitesh"
    if(username === "hitesh") {
        const web=" youtube"
        // console.log(username + web)
    }
    // console.log(web); //cannot able to access outside of it's scope
}
// console.log(username);//ReferenceError: username is not defined


//+++++++++++++++++++++++++++++++++++++++++++++  Intresting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

addOne(5)//can access addOne (normal function) without initialization

function addOne(num){
    return num+1
}


//addTwo(5)//ReferenceError: Cannot access 'addTwo' before initialization

const addTwo= function (num){
    return num+1
}

addTwo(5)

