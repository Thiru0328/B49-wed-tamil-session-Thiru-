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
switch(result) {
  case 1:
    result = "31";
    break;
  case 2:
    result = "28";
    break;
  case 3:
     result = "31";
    break;
  case 4:
    result = "30";
    break;
  case 5:
    result = "31";
    break;
  case 6:
    result= "30";
    break;
  case 7:
    result = "31";
    break;
      case 8:
     result = "31";
    break;
  case 9:
    result = "30";
    break;
  case 10:
    result = "31";
    break;
  case 11:
    result= "30";
    break;
  case 12:
    result = "31";
    break;
     default:
    result = "Error";
}console.log(result); //end-here
});