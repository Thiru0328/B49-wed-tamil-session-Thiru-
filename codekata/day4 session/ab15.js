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


let result1=userInput[0].split(' ');
  let ans1=parseInt(result1[0]);
  let ans2 = parseInt(result1[1]);

for (i=0; i<ans2; i++){
console.log(ans1);}
  //end-here
});