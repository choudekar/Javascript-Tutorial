/*
syntax --> for(statement1; statement2; statement3){
    //code to be executed
}
*/
// for(let i=0;i<=5;i++){
//   console.log(i+1)
//    }
//program to add first n natural numbers
let sum = 0;
let n = 4;
for(let i=0;i<n;i++){
    sum += (i+1);
    console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is "+sum);

//program to calculate factorial of numbers 
let factorial = 1;
let num = 4;
for(let i=1;i<num;i++){
   factorial *= (i+1);
   console.log((i+1),"*")
}
console.log("Factorial of "+num+" is "+factorial);

/*for in loop
syntax
for(keys in object){
    //code to be executed
} */
let obj = {
    harry:85,
    vijay:45,
    pooja:86,
    rahul:42
}
for(let a in obj){
   // console.log(a)
   console.log("Marks of "+a+" are "+obj[a]);
}
/*The for of loop
syntax
for(values of object) */
for(let b of "Pooja"){
    console.log(b)
}