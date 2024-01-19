for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
}
for (let i = 0; i < 10; i++) {
    console.log("outer loop", i)
    for (let j = 0; j < 20; j++) {
        console.log("inner loop",j)
    }
}

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 Detected!")
        break;
    }
    console.log(element)
}
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 Detected!")
        continue;
    }
    console.log(element)
}

//While Loop
let i=0
while(i<=10){
    console.log(i)
    i=i+2
}

val=11
do {
    console.log(val)
    val=val+2
    
} while (val<=10);

//foreach doesn't return anything even after you explicitly return it 
let myArr=["a","b","c"]
myArr.forEach((val)=>console.log(val))
myArr.forEach((val,idx,arr)=>console.log(val,idx,arr))
myArr.forEach(Printing)
function Printing(val){
    console.log(val)
}

//for of
const greeting="Hello World"
for (const greet of greeting) {
    console.log(greet)
}
//Map unique key-value paire remember insertation order Not Iterable
const map=new Map()
map.set('IN','India')
map.set('US','America')
console.log(map)

for ( const [keys,val] of map ){
    console.log(key ,':- ',val)
}

const myObj={
    game1:"A",
    game2:"B",
}
//Cannot iterate object using this 
// for ( const [keys,val] of myObj ){
//     console.log(key ,':- ',val)
// }

for (const key in myObj) {
    console.log(key)
    console.log(myObj[key])
}

let programming=["js","java"]
for (const key in programming) {
    console.log(key)
    console.log(programming[key])
}

//Nothig Printing 
// for (const key in map) {
//     console.log(key)
//     console.log(programming[key])
// }

const coding=[
    {
        lName:"js",
        lFileName:"js"
    },
    {
        lName:"java",
        lFileName:"java"
    },
]
 coding.forEach((val)=>
      console.log(val.lFileName+"&"+val.lName)
 )


