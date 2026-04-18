const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const checkGuess = (guess, secret) => {
    if (guess < secret) return "Too low! Try again.";
    if (guess > secret) return "Too high! Try again.";
    return "Correct! You got it!";
};
let attempts;

const getPlayerGuess = () => {
    while (true) {
        const input = prompt("Enter a guess (1-100):");

        if (input === null) {
            alert("⛔ The Evil AI won't let you quit that easily! Please enter a number to continue");
            continue;
        }

        const trimmed = input.trim();

        if (trimmed === "") {
            alert("⛔ Empty input is not allowed");
            continue;
        }

        const num = Number(trimmed);

        if (!Number.isInteger(num) || num < 1 || num > 100) {
            alert("⛔ Enter a whole number between 1 and 100");
            continue;
        }

        return num;
    }
};

const askNewGame = () => {
    while (true) {
        const input = prompt("Start a new game? (y/n)");

        if (input === null) return "n";

        const answer = input.trim().toLowerCase();

        if (answer === "y" || answer === "n") {
            return answer;
        }

        alert("⛔ Type only 'y' or 'n'");
    }
};

let totalScore = 0;

const playSingleGame = () => {

    const secret = generateRandomNumber();
    let attempts = 0;

    while (attempts < 10) {
        alert("Attempt number: " + (attempts + 1) + " of 10");
        const guess = getPlayerGuess();

        attempts++;
        const result = checkGuess(guess, secret);

        alert(result);

        if (result === "Correct! You got it!") {
            const score = Math.max(0, 100 - (attempts - 1) * 10);
            totalScore += score;
            alert(`🎉 You guessed the number in ${attempts} attempts! \nYour score for this game: ${score}. Total Score: ${totalScore}`);
            console.log(
                `🎉 Attempts: ${attempts} | Score: ${score} | Total Score: ${totalScore}`
            );
            return true;
        }

        console.log(`Attempt ${attempts}/10: ${result}`);
    }

    alert(`💀 Game over! The secret number was ${secret}`);
    return true;
};

const startGame = () => {
    console.clear();
    console.log("🎯 Number Guessing Game started!");
    console.log("👉 Follow the prompts to play.\n");

    while (true) {
        const finished = playSingleGame();

        if (!finished) break;

        const again = askNewGame();
        if (again !== "y") {
            console.log("Thanks for playing! Final Total Score: " + totalScore);
            break;
        }
    }
};


function gameStart() {

    if (confirm("Welcome to the Number Guessing Game! \nTry to guess the secret number between 1 and 100. \nYou have 10 attempts. Good luck!")) {
        startGame();
    }

    else {
        console.log("Game exited.");
    }
}

gameStart();