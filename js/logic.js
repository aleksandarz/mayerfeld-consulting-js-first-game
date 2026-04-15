// Delete all comments when you build the rest of the code
export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
}

/*
  Use this function inside a while loop.

  Example idea:
  - Keep asking the user for a number inside the loop
  - Call checkGuess(userGuess, correctNumber)
  - Show the returned message to the user
  - Stop the loop only when the message says the guess is correct

  The while loop should continue until the player guesses the right number.
*/
export const checkGuess = (playerGuess, correctNumber) => {
  if (playerGuess < correctNumber) {
    return "Too low! Try again.";
  } else if (playerGuess > correctNumber) {
    return "Too high! Try again.";
  } else {
    return "Correct! You got it!";
  }
}