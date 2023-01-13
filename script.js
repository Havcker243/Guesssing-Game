// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
    let promptText = "Enter a number between 1 and 100.";
    let guessCount = 0;
    let guess = 0;
    let isValidInput = false;
    while (guessCount < totalGuesses) {
        isValidInput = false;
        while (!isValidInput) {
            guess = prompt(promptText);
            if (guess === null) {
                return 0;
            }
            if (isNaN(guess) || guess === "") {
                promptText = "Please enter a number.";
            } else {
                isValidInput = true;
                guess = Number(guess);
                guessCount++;
                if (guess === numToGuess) {
                    return guessCount;
                } else if (guess < numToGuess) {
                    promptText = `${guess} is too small. Guess a larger number.`;
                } else if (guess > numToGuess) {
                    promptText = `${guess} is too large. Guess a smaller number.`;
                }
            }
        }
    }
    return 0;
}



