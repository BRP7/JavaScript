//()()
//To Save scope from global pollution
//to inidiatlly Invoke a function

(function chai(){
    
    console.log("DB Connected")
       
})();//named iifi

(()=>{
    console.log("DB Connected")
})();