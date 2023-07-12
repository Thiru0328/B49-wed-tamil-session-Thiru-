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

  a=parseInt(userInput[0]);
   b=parseInt(userInput[1]);
    c=parseInt(userInput[2]);
    if (a>=b && a>=c) {
        console.log(a);}
    else  if  (b>=a && b>=c) {
        console.log(b);}
        else {
            console.log(c);} 

  //end-here
});