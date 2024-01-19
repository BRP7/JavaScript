// const promiseOne=new Promise(function(res,rej){
//     setTimeout(function(){
//         // console.log("Async Task")
//         res()
//     },2000)
// })
// promiseOne.then(()=>console.log("promise consume"));


// new Promise(function(res,rej){
//     setTimeout(function(){
//         console.log("Async Task Two")
//         res()
//     },2000)
// }).then(()=>console.log("promise two consume"));


// const promiseThree=new Promise(function(res,rej){
//         setTimeout(function(){
//             // console.log("Async Task")
//             res({username:"Hitesh"})
            
//         },2000)
//     })
//     promiseThree.then((username)=>console.log(username));


// const promiseFour=new Promise(function(res,rej){
//         setTimeout(function(){
//             let err=false
//             if(!err){
//                 res({username:"Hitesh"})
//             }
//             else{
//                 rej("Error:Something went Wrong!!!")
//             }
//         },2000)
//     })
//     promiseFour.then((user)=>{console.log(user);//{ username: 'Hitesh' }
//                              return user.username})
//                .then((username)=>console.log(username))//Hitesh
//                .catch((error)=>console.log(error))
//                .finally(()=>console.log("Promise Either Resolve or Rejected!"))


const promiseFive=new Promise(function(res,rej){
            setTimeout(function(){
                let err=true
                if(!err){
                    res({username:"Hitesh"})
                }
                else{
                    rej("Error:Something went Wrong!!!")
                }
            },2000)
        })

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()