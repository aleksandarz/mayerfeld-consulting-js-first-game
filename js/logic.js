const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const checkGuess = (guess, secret) => {
    if (guess < secret) return "Too low! Try again.";
    if (guess > secret) return "Too high! Try again.";
    return "Correct! You got it!";
};

let totalScore = 0;

const confirmExit = () => confirm("Are you sure you want to exit the game?");

const getPlayerGuess = (attempt, secret, onValidGuess) => {
    const input = prompt(`Attempt ${attempt} of 10\nEnter a guess (1-100):`);

    if (input === null) {
        if (confirmExit()) {
            alert("Game exited. See you next time!");
            return null;
        } else {
            return getPlayerGuess(attempt, secret, onValidGuess);
        }
    }

    const trimmed = input.trim();
    const num = Number(trimmed);

    if (trimmed === "" || !Number.isInteger(num) || num < 1 || num > 100) {
        alert("⛔ Please enter a whole number between 1 and 100");
        return getPlayerGuess(attempt, secret, onValidGuess);
    }

    onValidGuess(num);
};

const playRounds = (attempt, secret) => {
    if (attempt > 10) {
        alert(`💀 Game over! The secret number was ${secret}`);
        askNewGame();
        return;
    }

    getPlayerGuess(attempt, secret, (guess) => {
        const result = checkGuess(guess, secret);
        
        console.log(`Round ${attempt}: Player guessed ${guess} -> ${result}`);
        alert(result);

        if (result === "Correct! You got it!") {
            const score = Math.max(0, 100 - (attempt - 1) * 10);
            totalScore += score;
            console.log(`Success! Score: ${score} | Total Score: ${totalScore}`);
            alert(`Correct! \nGame Score: ${score}\nTotal Score: ${totalScore}`);
            askNewGame();
        } else {
            playRounds(attempt + 1, secret);
        }
    });
};

const askNewGame = () => {
    const input = prompt("Start a new game? (y/n)");

    if (input === null || input.trim().toLowerCase() === "n") {
        console.log("Thanks for playing!");
        console.log("Final Total Score: " + totalScore);
        alert("Thanks for playing! Final Total Score: " + totalScore);
        return;
    }

    const answer = input.trim().toLowerCase();
    if (answer === "y") {
        initGameSession();
    } else {
        alert("⛔ Please type only 'y' or 'n'");
        askNewGame();
    }
};

const initGameSession = () => {
    console.clear();
    const secret = generateRandomNumber();
    console.log("Number Guessing Game started!");
    console.log("Tip: Use the prompts to play.");
    playRounds(1, secret);
};

const gameStart = () => {
    const welcome = confirm(
        "Welcome to the Number Guessing Game!\n\n" +
        "TIP: Open the Console (F12) to see your guesses.\n\n" +
        "Ready to start?"
    );

    if (welcome) {
        initGameSession();
    } else {
        console.log("Game declined.");
        alert("Maybe next time! Goodbye!");
    }
};

gameStart();
