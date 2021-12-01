const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let result = [];
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  result.push(answer);
    rl.question("What's an activity you like doing? :)", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        result.push(answer);
        rl.question("What do you listen to while doing that? :)", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            result.push(answer);
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) :)", (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);
                result.push(answer);
                console.log(result);
                
                rl.close();
            });
        });
    });
});