console.log("Primitive DataTypes")
//nn bb ss u
let a = null;
let b =345;
let c = true;//can also be false
let d = BigInt("145") + BigInt("5")
let e = "Pooja";
let f = Symbol("I am a nice symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof d)
console.log(typeof c)
//--------------------------------------------------------
 console.log("Non Primitive DataTypes : Objects in JS")
const item = {
  "Pooja": true,
  "Vijay": false,
  "Lovish": 67,
  "Rohan": undefined
    }
console.log(item)
console.log(item["Pooja"])
console.log(item["Lovish"])
const student = {
  "Name" : "Pooja",
   "Phone Number": "1234567890",
   "Marks":98
}
console.log(student)