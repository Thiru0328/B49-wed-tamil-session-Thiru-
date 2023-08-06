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

  //console.log(userInput);
  let size=parseInt(userInput[0]);
  let marks = userInput[1].split(" ");
  
  for (let i=0; i<size; i++){
      marks[i]= parseInt(marks[i]);
  }

let maximumMark = Math.max(...marks);
//let maximumMark = findMaximum(marks, size);
console.log(maximumMark);

//end-here
});