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
 let str = userInput.join();
  //let a = parseInt(array[0]);
  //let b= parseInt(array[1]);
  //let c = parseInt(array[2]);
  //let result= ((a*b*c)/100); 
   //console.log(typeof(result.toFixed(2)));
   console.log(str);
   
   
  //end-here
});