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
  const arry= userInput[0].split("");
 // console.log(arry);
 //let intergerarray=parseInt(arry)
 //console.log(intergerarray)
 const result = arry.filter((num)=>{
     if (num%2!==0){
         return num;
     }
     else{
         return num===-1;
     }
 })
 
 const result2= result.join(" ");
 console.log(result2);

  //end-here
});
