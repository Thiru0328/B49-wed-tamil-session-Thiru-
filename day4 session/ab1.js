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
if(result===0){
    console.log('Zero');
} else if (result%2===0) {
    console.log('Even')
} else if (result%2!==0){
    console.log('Odd')
}

  //end-here
});