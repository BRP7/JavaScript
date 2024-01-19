const myDate=new Date()
// console.log(myDate)//2024-01-11T20:14:10.045Z
// console.log(myDate.toString())//Fri Jan 12 2024 01:45:47 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())//Fri Jan 12 2024
// console.log(myDate.toLocaleDateString())//12/1/2024
// console.log(myDate.toLocaleString())//12/1/2024, 1:45:47 am
// console.log(myDate.toJSON)//[Function: toJSON]

// let myNewDate=new Date(2023,0,25)
// console.log(myNewDate)//2023-01-24T18:30:00.000Z
// console.log(myNewDate.toDateString())//Wed Jan 25 2023
let myNewDate2=new Date("20,1,2024")//Invalid Date
let myNewDate3=new Date("2024,5,24")//2024-05-23T18:30:00.000Z
let myNewDate4=new Date("5,23,2024")//2024-05-22T18:30:00.000Z
// console.log(myNewDate2)
// console.log(myNewDate3)
// console.log(myNewDate4)


// let myTimeStamp=Date.now()
// console.log(myTimeStamp)//1705004731702
// console.log(myNewDate3.getTime())//1716489000000
// console.log(Date.now()/1000)//to get time in seconds 1705004797.558 make it round ,ceil or floor for ease 
// console.log(Math.round(Date.now()/1000))//1705004886


let newDate=new Date()
// console.log(newDate.getMonth())//0
// // console.log(newDate.getWeeks()) Not a function 
// console.log(newDate.getDay())//5
// console.log(newDate.getDate())//12
// console.log(newDate.getMonth()+1)//1
// console.log(newDate.getFullYear())//2024

newDate.toLocaleString("default",{
    weekday:"long"
})
console.log(newDate.toLocaleString()) //12/1/2024, 2:03:32 am
console.log(newDate.toDateString())//Fri Jan 12 2024
console.log(newDate.toString())//Fri Jan 12 2024 02:04:46 GMT+0530 (India Standard Time)