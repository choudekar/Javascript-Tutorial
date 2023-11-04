//Question 1
/*
console.log("Q.1 Use logical operators to find whether the age of a person lies between 10 and 20")
const prompt = require("prompt-sync")();
let age  = prompt("What is your age ?")
if(age>10 && age<20)
{
    console.log("Your age lies between 10 and 20")
}else{
    console.log("Your age doesnt lies between 10 and 20")
}
*/
console.log("=============================================================================================")
//Question 2
/*
console.log("Q.2 Demonstrate the use of switch case statements in JS")
const prompt = require("prompt-sync")();
let age  = prompt("What is your age ?")
switch(age){
    case '12':
        console.log("Your age is 12")
        break;
    case '13':
        console.log("Your age is 13")
        break;
    case '15':
        console.log("your age is 15")
        break;
    default:
        console.log('You are special')
}
*/
console.log("=============================================================================================")
//Question 3
console.log("Q.3 Write a JS program to find whether a number is Divisible by 2 & 3")
let num = 18;
if(num%2==0 && num%3==0){
    console.log("given number is divisible by 2 and 3")
}else{
    console.log("Given number is not divisible by 2 and 3")
}
console.log("=============================================================================================")
//Question 4
console.log("Q.4  Write a JS program to find whether a number is Divisible by either 2 or 3")
let number = 15;
if( number %2==0 || number %3==0){
    console.log("given number is divisible by 2 and 3")
}else{
    console.log("Given number is not divisible by 2 and 3")
}
console.log("=============================================================================================")
//Question 5
console.log("Q.5 Print You can drive or You cannot drive based on age being greater than 18 using ternary operator")
let age = 12;
let a = age>18 ? "You can drive":"you cannot drive";
console.log(a)
///=============================================================================================================