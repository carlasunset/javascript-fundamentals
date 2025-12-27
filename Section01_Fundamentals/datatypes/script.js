const a = 10
const b = 10.5
const c = 'Maria'
const d = 'a'
const e = false
const f = {name: 'Maria', age: 25}
const g = ['a', 15, false, 'maria']
const h = null
const i = undefined

//with the console.log we can see the results in the devtools/console page of the index.html file
console.log(typeof a) //number
console.log(typeof b) //number
console.log(typeof c) //string
console.log(typeof d) //string
console.log(typeof e) //boolean
console.log(typeof f) //object
console.log(typeof g) //object -  arrays are a special type of object in JavaScript
console.log(typeof h) // object (this is a known JavaScript bug, null is not actually an object)
console.log(typeof i) //undefined

//https://www.w3schools.com/js/js_datatypes.asp