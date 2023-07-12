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
let number1= parseFloat(array[0]);
let number2 = parseFloat(array [1]);
// looping until both numbers are equal
 while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}
  console.log(number1);

  //end-here
});