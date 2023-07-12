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

  let meters = parseInt(userInput *1000);
  console.log(meters);
  let centimeters = parseInt(userInput * 100000);
  console.log(centimeters);
  let result = (meters && centimeters);

  //end-here
});