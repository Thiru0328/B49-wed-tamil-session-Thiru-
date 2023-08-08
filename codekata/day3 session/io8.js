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

  //console.log(userInput[0].split(' ')[0]);
  //console.log(userInput[0].split(' ')[1]);
  //console.log(userInput[0].split(' ')[2]);

  let values = userInput[0].split(' ');
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);

  /*values.forEach(value=>{
    console.log(value))
  };

  for (let values of values) {
    console.log(value)
  };

  })*/

  //end-here
});