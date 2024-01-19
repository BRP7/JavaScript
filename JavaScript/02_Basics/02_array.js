const marvel_heros=["Thor","Ironman"]
const dc_heros=["Superman","Batman"]

marvel_heros.push(dc_heros)//it will push dc_heros in marvel_heros inshort change original Array
console.log(marvel_heros)//[ 'Thor', 'Ironman', [ 'Superman', 'Batman' ] ] also put whole Array as one element 

const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros)//it will put element of arrays as seperate element into another New array 
//[ 'Thor', 'Ironman', [ 'Superman', 'Batman' ], 'Superman', 'Batman' ] Because MarvelHeros change in push operation
//[ 'Thor', 'Ironman', 'Superman', 'Batman' ] If you comment that part then

const allHeros1=[...marvel_heros,...dc_heros]
console.log(allHeros1)//[ 'Thor', 'Ironman', 'Superman', 'Batman' ]

const myArr=[1,2,3,[4,5],6,[7,[8,9,10]],11,12]
console.log(myArr.flat(Infinity))
/*[
    1,  2, 3, 4,  5,
    6,  7, 8, 9, 10,
    11, 12
] */
// console.log(myArr.flat(1))//depth  [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, 10 ], 11, 12 ]


const a1=[2,3]
console.log(Array.isArray(a1))//true
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"Hitesh"}))//[]

const a4="hello"
const a2="world"
const a3="good"
console.log(Array.of(a4,a2,a3))//[ 'hello', 'world', 'good' ]

