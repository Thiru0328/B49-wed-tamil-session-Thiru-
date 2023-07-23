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

let n=parseInt(userInput[0]);
var arr=[];
  
 for(i=1;i<=n;i++)
    arr.push(9*i);
    
 console.log(arr.join(" "));


  

  //end-here
});