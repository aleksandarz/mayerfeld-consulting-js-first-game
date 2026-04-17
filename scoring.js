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

let secret, attempts, guess, result, totalScore, score;


function gameA() {
    while (attempts < 10) {
        guess = getPlayerGuess();
        result = checkGuess(guess, secret);
        console.log(result);

        if (result === "Correct! You got it!") {
            console.log(`Congratulations! You've guessed the number in ${attempts + 1} attempts.` + ` Your score is ${scoringA().totalScore} points!`);
            break;
        }
        attempts++;
    }
    if (attempts >= 10) {
        console.log(`Game over! Too many attempts! The number was ${secret}.`);
    }
    startNewGameA();
}

function scoringA() {
    if (result === "Correct! You got it!") {
        score= 100 - (attempts * 10);
        totalScore += score;
        return { totalScore: totalScore, message: " points" };
    }

}

function startGameA() {
    secret = generateRandomNumber();
    attempts = 0;
    guess = null;
    gameA();
}

startNewGameA(); 