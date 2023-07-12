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
  let result1= parseInt(userInput[0]);
 userInput.forEach((result1) => {
    console.log(userInput*3);
});

 
  

  //end-here
});