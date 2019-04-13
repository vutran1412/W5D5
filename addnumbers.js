const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});


const addNumbers = function(sum,numsLeft,completionCallback){
  if (numsLeft > 0){
    reader.question("What would you like to add?", 
    function(answer){ 
      let number = parseInt(answer);
      sum += number
      numsLeft--;
      addNumbers(sum,numsLeft,completionCallback);
    })
  } else {
    completionCallback(sum);
  }
  return;
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


