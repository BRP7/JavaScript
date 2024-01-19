const name="Hitesh";
const repoCount=7;

// console.log(name+repoCount+"value");


//String Interpolation
console.log(`hello my name is ${name} and repoCount is ${repoCount}`);

const str=new String("Hello-hc");
console.log(str[1]);//e
console.log(str.length);//8
console.log(str.charCodeAt(3));//108
console.log(str.indexOf("H"));//0
console.log(str.charAt(3));//l
console.log(str.toLowerCase());//hello-hc
console.log(str.toUpperCase());//HELLO-HC
console.log(str.concat("Hr"));//Hello-hcHr
const str1=str.slice(-7,3)
console.log(str1);//you can give neg index
const str2=str.substring(-8,3)
console.log(str2);//you can give neg index
console.log(str.substring(1,3));//you can't give neg index//el
console.log(str.split("-"));
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())
console.log(str.replace('l','i'))
console.log(str.replaceAll('l','i'))
console.log(str.includes("hello"));//false
const arr=["h","l","l"];
console.log(arr.join('-'));//h-l-l
console.log(str);
// console.log(str.)
/* it's an key-value pair not an array it's an object
str in console
0: "H"
1: "e"
2: "l"
3: "l"
4: "o"
length: 5
[[Prototype]]: String
*/

console.log(str.__proto__);//{} in node
/* in console or browser 
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat : ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize : ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr : ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
[[Prototype]]: Object
[[PrimitiveValue]]
: 
"" */