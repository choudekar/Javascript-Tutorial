/*While loop
syntax-->
while(condition){
    //code to be executed
} */

const prompt = require("prompt-sync")();
let n = prompt("Enter a number n--> ")
n=Number.parseInt(n);
/*
let i=0;
while(i<n){
    console.log(i);
    i++;
}
*/

/*do while loop
syntax -->
do{
    //code
} while(condition)
*/
let i=1;
do{
    console.log(i);
    i++
}while(i<n)