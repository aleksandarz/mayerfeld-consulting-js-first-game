const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const checkGuess = (playerGuess, correctNumber) => {
    if (playerGuess < correctNumber) {
        return "Too low! Try again.";
    } else if (playerGuess > correctNumber) {
        return "Too high! Try again.";
    } else {
        return "Correct! You got it!";
    }
}
function getPlayerGuess() {
    return parseInt(prompt("Enter a guess:"));
}


function playGameA() {
    return (prompt("Start a new game? Type y for yes, n for no:"))
}

function startNewGameA() {
    const response = playGameA();
    if (response === "y") {
        startGameA();
    } else {
        console.log("Thanks for playing!");
    }
}

let secret, attempts, guess, result;

function gameA() {
    while (attempts < 10) {
            guess = getPlayerGuess();
            result = checkGuess(guess, secret);
            console.log(result);

            if (result === "Correct! You got it!") {
                console.log(`Congratulations! You've guessed the number in ${attempts+1} attempts.`);
                break;
            }
            attempts++;
    }
    if (attempts >= 10) {
        console.log(`Game over! Too many attempts! The number was ${secret}.`);
    }
    startNewGameA();
}

function startGameA() {
    secret = generateRandomNumber();
    attempts = 0;
    guess = null;
    gameA();
}

startNewGameA(); 