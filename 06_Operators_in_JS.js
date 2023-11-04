console.log("Expressionsin JS")
77;
"Me"
//me --> doesnt allow in JS
true
false
console.log("Operators in JS")
let a = 45;
let b = 4;

//Arithmetic operators
console.log("a+b =", a+b)
console.log("a-b =", a-b)
console.log("a*b =", a*b)
console.log("a/b =", a/b)
console.log("a%b =", a%b)
console.log("a**b =", a**b)//45*45*45*45
console.log("a++ =", a++)
console.log("a =", a)
console.log("++a =",++a)
console.log("a-- =", a--)
console.log("a =", a)
console.log("--a =",--a)

//Assignment operators
let assignment = 1;
assignment += 5  //same as euual to
//assignment = assignment + 5
console.log("assignment is now =" , assignment)
assignment -= 5
console.log(assignment)
assignment *= 5
console.log(assignment)
assignment /= 5
console.log(assignment)
assignment %= 5
console.log(assignment)
assignment **= 5
console.log(assignment)

//Comparison operator
let comp1 = 6;
let comp2 = 5;
//let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)
console.log("comp1 < comp2 is ", comp1 < comp2)
console.log("comp1 >= comp2 is ", comp1 >= comp2)
console.log("comp1 <= comp2 is ", comp1 <= comp2)

//Logical operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y && x==5)
console.log(x<y && x!=5)
console.log(x>y && x!=5)
console.log(x<y || x==5)
console.log(x>y || x==5)
console.log(x<y || x!=5)
console.log(x>y || x!=5)
console.log(!false)
console.log(!true)