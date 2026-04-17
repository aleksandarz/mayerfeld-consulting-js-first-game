const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const checkGuess = (guess, secret) => {
    if (guess < secret) return "Too low! Try again.";
    if (guess > secret) return "Too high! Try again.";
    return "Correct! You got it!";
};

const getPlayerGuess = () => {
    const input = prompt("Enter a guess (1-100):");

    if (input === null) return null;

    const trimmed = input.trim();

    if (trimmed === "") {
        alert("⛔ Empty input is not allowed");
        return getPlayerGuess();
    }

    const num = Number(trimmed);

    if (!Number.isInteger(num) || num < 1 || num > 100) {
        alert("⛔ Enter a whole number between 1 and 100");
        return getPlayerGuess();
    }

    return num;
};

const askNewGame = () => {
    const input = prompt("Start a new game? (y/n)");

    if (input === null) return "n";

    const answer = input.trim().toLowerCase();

    if (answer !== "y" && answer !== "n") {
        alert("⛔ Type only 'y' or 'n'");
        return askNewGame();
    }

    return answer;
};

let totalScore = 0;

const playSingleGame = () => {
    const secret = generateRandomNumber();
    let attempts = 0;

    while (attempts < 10) {
        const guess = getPlayerGuess();

        if (guess === null) {
            console.log("Game cancelled");
            return false;
        }

        const result = checkGuess(guess, secret);

        alert(result);

        if (result === "Correct! You got it!") {
            const score = Math.max(0, 100 - attempts * 10);
            totalScore += score;

            console.log(
              `🎉 Attempts: ${attempts + 1} | Score: ${score} | Total: ${totalScore}`
            );
            return true;
        }

        attempts++;
    }

    alert(`💀 Game over! Number was ${secret}`);
    return true;
};

export const startGame = () => {
    console.clear();
    console.log("🎯 Number Guessing Game started!");
    console.log("👉 Or type startGuessingGame() anytime to restart\n");

    while (true) {
        const finished = playSingleGame();

        if (!finished) break;

        const again = askNewGame();
        if (again !== "y") {
            console.log("Thanks for playing!");
            break;
        }
    }
};

window.startGuessingGame = startGame;