console.log("Understanding declaration and rules of var, let and const")
//-------------------------------------------------------------------------
console.log(" 1.   var is globally scoped while let and const are block scoped")
console.log(" 2.   var can be redeclared and updated ")
var a = 45;
var a = "p" 
a = "b"
console.log(a)
//------------------------------------------------------------------
console.log("3.  let can be updated but not redeclared")
let b = "me"
//let b = 4 // throws error identifier b has been already declared
b = 5  
console.log(b)
//------------------------------------------------------------------
console.log("4   const can neighter be updated nor redeclared")
const author = "Pooja"
//const author = "me"
//author = "we"
console.log(author)
//------------------------------------------------------------------
console.log("5.   const must be initialized during declaration unlike let and var")
//const me;  have to initialize const
//---------------------------------------------------------------------
console.log("6.   var variables are initialized with undefined wheras let and const are not initialized")
var c;
console.log(c) //undefined will be printed on console
let d;
console.log(d) //undefined will be printed on console
//=========================================================================
//const e;
//console.log(e)