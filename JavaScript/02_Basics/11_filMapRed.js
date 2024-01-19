const myNum=[1,2,3,4,5,6,7]
const newNum=myNum.filter((num)=>num>4)
console.log(newNum)

const newNum1=myNum.map((num)=>num+10)
console.log(newNum1)

const newNum2=myNum.reduce((acc,curr)=>{
    console.log(`acc:${acc} and cuurentValue:${curr}`)
    return acc + curr
},0)
console.log(newNum2)



const shoppingCart=[
    {
        itemName:"js",
        price:1000
    },
    {
        itemName:"java",
        price:1000
    },
    {
        itemName:"python",
        price:1000
    }
]

const result=shoppingCart.reduce((acc,curr)=>{return acc+curr.price},0)
console.log(result)