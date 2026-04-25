const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const checkGuess = (guess, secret) => {
    if (guess < secret) return "Too low! Try again.";
    if (guess > secret) return "Too high! Try again.";
    return "Correct! You got it!";
};

let totalScore = 0;

const confirmExit = () => confirm("Are you sure you want to exit the game?");

const getPlayerGuess = (callback, attempt, secret) => {
    const input = prompt(`Attempt ${attempt} of 10\nEnter a guess (1-100):`);

    if (input === null) {
        if (confirmExit()) {
            alert("Game exited. See you next time!");
            return;
        } else {
            return getPlayerGuess(callback, attempt, secret);
        }
    }

    const trimmed = input.trim();
    const num = Number(trimmed);

    if (trimmed === "" || !Number.isInteger(num) || num < 1 || num > 100) {
        alert("⛔ Please enter a whole number between 1 and 100");
        return getPlayerGuess(callback, attempt, secret);
    }

    callback(num);
};

const playRounds = (attempt, secret) => {
    if (attempt > 10) {
        alert(`💀 Game over! The secret number was ${secret}`);
        askForNewGame();
        return;
    }

    getPlayerGuess((guess) => {
        const result = checkGuess(guess, secret);
        console.log(`Round ${attempt}: Player guessed ${guess} -> ${result}`);
        alert(result);

        if (result === "Correct! You got it!") {
            const score = Math.max(0, 100 - (attempt - 1) * 10);
            totalScore += score;
            console.log(`🎉 Success! Score: ${score} | Total Score: ${totalScore}`);
            alert(`🎉 You got it! \nScore for this game: ${score}\nTotal Score: ${totalScore}`);
            askForNewGame();
        } else {
            playRounds(attempt + 1, secret);
        }
    }, attempt, secret);
};

const askForNewGame = () => {
    const input = prompt("Start a new game? (y/n)");

    if (input === null || input.trim().toLowerCase() === "n") {
        console.log(`Thanks for playing! Final Total Score: ${totalScore}`);
        alert(`Thanks for playing! Final Total Score: ${totalScore}`);
        return;
    }

    if (input.trim().toLowerCase() === "y") {
        startNewGameSession();
    } else {
        alert("⛔ Type only 'y' or 'n'");
        askForNewGame();
    }
};

const startNewGameSession = () => {
    console.clear();
    const secret = generateRandomNumber();
    console.log("🎯 New Game Started!");
    console.log("-------------------");
    playRounds(1, secret);
};

const gameStart = () => {
    const welcome = confirm(
        "Welcome to the Number Guessing Game!\n\n" +
        "👉 TIP: Open F12 (Console) to see your logs.\n" +
        "Try to guess the secret number (1-100) in 10 attempts."
    );

    if (welcome) {
        startNewGameSession();
    } else {
        alert("Maybe next time! Goodbye!");
    }
};

gameStart();
