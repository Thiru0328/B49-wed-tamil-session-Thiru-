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
 
S= userInput[0];
mid = S.length;//2
if (mid%2==0){
  console.log(S[mid-1]+"**"+S[mid+1]);
}else{
  console.log(S[mid]+"*"+S[mid+1])}
});