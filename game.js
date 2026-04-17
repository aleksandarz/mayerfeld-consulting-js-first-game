function getPlayerGuess() {
    while (true) {
        let userInput = prompt("Enter your guess (1-100):");
      
        let num = Number(userInput);

        if (!isNaN(num) && Number.isInteger(num) && num >= 1 && num <= 100) {
            return num;
        }
    }
}
console.log(getPlayerGuess());
