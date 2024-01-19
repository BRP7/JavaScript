const arr=[1,2,3,4,5]
console.log(arr)
console.log(typeof arr)//object

const myArr=new Array(1,2,3,4)
console.log(myArr)
console.log(typeof myArr)//object
console.log(myArr[2])//3


myArr.push(5)
myArr.push(6)
myArr.push(7)
console.log(myArr)//[  1, 2, 3, 4, 5, 6, 7 ]

myArr.pop()
myArr.pop()
console.log(myArr)//[ 1, 2, 3, 4, 5 ]


myArr.unshift(9)
console.log(myArr)//[ 9, 1, 2, 3, 4, 5 ] Very Expensive operation as it moves all element to put new element at
//1st position so if such usecase encounter use something like decending order
myArr.shift()
console.log(myArr)//[ 1, 2, 3, 4, 5 ]

console.log(myArr.includes(1))//true
console.log(myArr.indexOf(9))//-1
const newArray=myArr.join()//Return String

console.log(newArray)//1,2,3,4,5 
console.log(typeof newArray)//String
console.log(myArr)

//slice splice

console.log("A   ",myArr)//A    [ 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3)
console.log("B   ",myArr)//B    [ 1, 2, 3, 4, 5 ]
console.log("B   ",myn1)//B    [ 2, 3 ]
const myn2=myArr.splice(1,3)
console.log("C   ",myArr)//C    [ 1, 5 ]
console.log("C   ",myn2)//C    [ 2, 3, 4 ]




