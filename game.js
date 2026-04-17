function getPlayerGuess() {
    while (true) {
        let userInput = prompt("Enter your guess (1-100):");
        let parsedNumber = parseInt(userInput);
        
        if (!isNaN(parsedNumber) && parsedNumber >= 1 && parsedNumber <= 100) {
            return parsedNumber;
        }
    }
}

console.log(getPlayerGuess());