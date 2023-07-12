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

  let givendata = parseInt(userInput[0]);
  
// checking if number is negative
if (givendata < 0) {
    console.log('Error!');
}

// if number is 0
else if (givendata === 0) {
    console.log(1);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= givendata; i++) {
        fact *= i;
    }
    console.log(fact);
}

  //end-here
});