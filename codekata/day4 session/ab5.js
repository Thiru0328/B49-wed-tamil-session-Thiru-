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
  //let A = parseInt(userInput.join());
 // let B = parseInt(userInput.join());
  //console.log(A);
  //console.log(userInput)
 let a= parseFloat(userInput[0])
  let b= parseFloat(userInput[1])
  let c= (a+b);
  result = console.log(Math.round(c));



  //end-here
});