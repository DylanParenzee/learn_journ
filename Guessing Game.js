
let maximum = parseInt(prompt("Enter a Maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a Valid number!"));
    
}

const targetNum = Math.floor(Math.random() * maximum) + 1 

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1 


while (parseInt(guess) !== targetNum) {
    attempts += 1;
    if (guess === "q") {
        break;
    }

    else if (guess > targetNum) {
        guess = (prompt("Guess again, too high!"));
    }
    
    else if (guess < targetNum) {
        guess = (prompt("whoops too low, try again!"));
    } 
    }

if (guess === "q") {
    console.log("OK you quit.")

}

else if (attempts <= 1) {
    console.log(` Congratulations, it only took you ${attempts} guess!`)
    
} else {
    console.log(`Congratulations, it only too you ${attempts} guesses!`)
}






