let numToGuess = Math.floor(Math.random() * 100) + 1;
let totalGuesses = 10;
let guessCount = 0;

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;

    if (isNaN(userGuess) || userGuess === "") {
        document.getElementById('response').textContent = "Please enter a number.";
    } else {
        guessCount++;
        userGuess = Number(userGuess);

        if (userGuess === numToGuess) {
            document.getElementById('response').textContent = 'Congratulations! You guessed it right in ' + guessCount + ' tries.';
        } else if (guessCount === totalGuesses) {
            document.getElementById('response').textContent = 'Sorry, you\'ve used up all your guesses. The correct number was ' + numToGuess;
        } else if (userGuess < numToGuess) {
            document.getElementById('response').textContent = userGuess + ' is too small. Guess a larger number. You have ' + (totalGuesses - guessCount) + ' guesses left.';
        } else if (userGuess > numToGuess) {
            document.getElementById('response').textContent = userGuess + ' is too large. Guess a smaller number. You have ' + (totalGuesses - guessCount) + ' guesses left.';
        }
    }
}



