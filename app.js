let maximum = parseInt(prompt("Enter the maximum Number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);
let attempts = 1;

let guess = parseInt(prompt("Enter your first guess!"));

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess === "q") break;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess");
    } else {
        guess = prompt("Too low! Enter a new guess");
    }
}
if (guess === "q") {
    console.log("OK, YOU QUIT!");
} else {
    console.log(`You got it! It took you ${attempts} guesses`);
}