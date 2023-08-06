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
const arr= userInput[1].split(" ");
  console.log(arr);

var result4 = arr.filter((value, currentIndex) => {
    if(arr.indexOf(value) === arr.lastIndexOf(value)){
        return value;
    }
})
console.log(result4);
  //end-here
});