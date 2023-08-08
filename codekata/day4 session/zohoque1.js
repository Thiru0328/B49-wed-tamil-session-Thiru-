//Removes the duplicates from an array

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
  //let size = parseInt(userInput[0]);
  let arr = userInput[0].split(" ");
  //console.log(elements);
  let result = arr.filter((value,currentIndex)=>{
      if (arr.indexOf(value)===currentIndex){
          return value }
  });
 
console.log("ANSWER IS:",result);
  //end-here
});

//ANSWER IS: [ '1', '2' ]