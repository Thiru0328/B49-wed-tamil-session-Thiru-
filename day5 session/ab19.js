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

let n = parseInt(userInput);

function sum_Of_Digits(n) { // definition 
  if (n < 0) n = -n 
  let result = 0

  while (n > 0) 
   {
    result += n % 10
    n = Math.floor(n / 10)
  }

  return result
}
console.log(sum_Of_Digits(n)); // function call



  //end-here
});