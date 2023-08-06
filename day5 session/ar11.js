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
let arr1= userInput[0].split(" ");
  //console.log(arr1);
  let arr2 = userInput[1].split(" ");
 // console.log(arr2);
 let result = arr2.filter((value, currentIndex) => {
     if (arr2.indexOf(value)===arr2.lastIndexOf(value)){
         return value;
     }
     
 });
 console.log(result);
 

  //end-here
});