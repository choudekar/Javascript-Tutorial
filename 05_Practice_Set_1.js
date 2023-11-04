//Question 1
console.log("create a variable of type string and try to add a number to it")
let a="Pooja"
let b = 13
console.log(a+b)
//output -->Pooja13
//Question 2
console.log("Use typeof operator to find the datatype of the string in last question")
console.log(typeof(a+b))
//output --> string
//Qoestion 3
console.log("create a const object in JS can you change it to hold a number later")
const a1={
  name:"Pooja",
  DOB : "13.12.1998"
}
console.log(a1)
//a1 = 57
//output --> error
//question 4
console.log("try to add anew key to const object in problem 3 were you able to do it")
a1["friend"] = "me"
a1["name"] = "Vijay"
console.log(a1)
//Question 5
console.log("write a JS program to create a word meaning dictionary of 5 words")
const dictionary = {
  appreciate:"recognize the full worth of",
  Callous: "Insensitive",
  yakka : "work, especially hard work",
  Pacify: "To calm down",
  Radical: "Extreme importnant"
}
console.log(dictionary)
console.log(dictionary.yakka)
console.log(dictionary["appreciate"])
           