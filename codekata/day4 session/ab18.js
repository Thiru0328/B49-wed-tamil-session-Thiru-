// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let array = userInput[0].split(" ");
let a= parseInt(array[0]);
let b= parseInt(array[1]);
let c= parseInt(array[2]);

let root1 = (-b +((b**2)-(4*a*c))**0.5) /(2*a);
let root2 = (-b -((b**2)-(4*a*c))**0.5) /(2*a);

console.log(root1.toFixed(2));
console.log(root2.toFixed(2));


  //end-here
});