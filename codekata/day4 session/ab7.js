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
  let array = userInput[0].split(' ');
 // console.log(array);
  let P = parseFloat(array[0]);
  let T = parseFloat(array[1]);
  let R = parseFloat(array[2]);
 // let R1= R/100;
 // console.log(R1);
  let result = (P*T*R)/100; 
   console.log(result.toFixed(2));

  //end-here
});