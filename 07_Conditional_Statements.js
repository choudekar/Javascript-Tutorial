const prompt = require("prompt-sync")();

let a = prompt("what's your age enter : ")
console.log(a)
console.log(typeof a)
a = Number.parseInt(a) //convert a string into a number
console.log(typeof a)

//nested if-else-if-else statement
if(a<0){
   console.log("This is not a valid age")
}
else if(a<9){
    console.log("You are a kid and dont even think about driving")
}
else if(a<18 && a>=9){
    console.log("You are a kid and you can think about driving after 18")
}
else {
    console.log("You can drive...!!!")
}
//============================================================================================
//switch statement
let days = "Wednesday";
switch(days){
    case 'Tuesday':
        console.log("It's a tuesday today");
        break;

    case 'Monday' :
        console.log("It's a monday today");
        break;

    case 'Wednesday':
        console.log("It's a wednesday today");
        //break;

    case 'Friday' :
        console.log("It's a friday today")
        break;

    case 'default' :
        console.log("Have a nice day ...!!")
        break;
}
console.log("Nice to meet you.");
//===========================================================================================================
//Ternary operator ? Condition? true:false
console.log("You can" , a<18 ? "not drive":"drive")