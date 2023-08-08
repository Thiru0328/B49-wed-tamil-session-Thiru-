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
let radius = parseFloat(userInput[0]);
let circumference = 2*(22/7)* radius;

  console.log(circumference.toFixed(2));
  

  //end-here
});