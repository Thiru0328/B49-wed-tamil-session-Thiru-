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
let result = parseFloat(userInput[0]); 
   if (((result%100==0) && (result%400 ==0)) || (result%4 == 0)){
  console.log("Y");
  }
  else { 
      console.log("N");}

  //end-here
});