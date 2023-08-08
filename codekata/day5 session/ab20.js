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
let result = parseInt(userInput);
//console.log(result);
  
  for (let i = 0; i<5; i++) {
  console.log(result);
}

  //end-here
});