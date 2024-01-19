async function getAllUsers(){
   try {
    const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(res)
    const data=await res.json()
    console.log(data)//{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
   } catch (error) {
    console.log(error)
   }
}
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err))