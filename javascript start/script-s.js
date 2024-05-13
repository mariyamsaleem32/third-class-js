let a = 3;
let b = --a;
console.log(a);
console.log(b);

var originalNum = 23;
var newNum = originalNum + 7;
console.log(newNum);

// ++a   //pre increment
// --aa  //pre decriment
// a++   //post increment
// a--   //post decriment

// let number1 = parseInt(prompt("enter your first number",33));
// let number2 = parseInt(prompt("enter your second number",27));
// console.log(number1 + number2);

// let x = 21;
// x += 4;
// console.log(x);

// let m = 8;
// let r = 8;
// console.log(m===r);

// let mood = "dark";
// let color = "black";
// if (mood == "dark"){
//     console.log(color);
// }
// else{
//     console.log(color);
// }

// let user = prompt("enter your name");
// let age = +prompt("enter your age");
// if (age >= 18){
//         console.log("you are aligible for vote");
//     }
//     else  {
//             console.log("you are not aligible for vote" );
//         }

// let number = +prompt ("enter your number");
// if (number %2 ==0){
//     console.log(number, "is even number");
// }
// else{
//     console.log(number,"is odd number");
// }

let age = +prompt ("enter your number");
if (age > 40){
    console.log(age, "you are senior");
}
else if (age < 18) {
    console.log("you are jonior");
}
else{
    console.log("you are middle");
}
