<<<<<<< HEAD

=======
>>>>>>> a36815cb0b96a8299ef42b003385872895cd004f
# Guessing Game

The "Guessing Game" is a simple web-based game that challenges players to guess a randomly selected number between 1 and 100. The game provides feedback on whether the guess is too high, too low, or correct. Players have a total of 10 attempts to guess the right number.

## Features

- **Random Number Selection**: The game selects a random number between 1 and 100 at the start.
- **User Input**: The player is provided with an input field to make their guess.
- **Immediate Feedback**: Feedback is given based on the player's guess: too high, too low, or correct.
- **Guess Tracker**: The number of remaining guesses is displayed.
- **End Game**: If a player runs out of guesses, the correct number is revealed.

## How to Play

1. Open the provided HTML file in a web browser.
2. Enter a number between 1 and 100 in the input field.
3. Click the "Submit" button or press Enter.
4. Review the feedback given below the input field and adjust your guess accordingly.
5. Continue guessing until you either guess the correct number or run out of attempts.

## Implementation Details

### HTML

The game's UI is structured in a single HTML file with a title, input field for the user's guess, a submit button, and a response div to provide feedback.

### JavaScript

- A random number between 1 and 100 is chosen at the start.
- The `checkGuess` function is the core function that checks the player's guess against the chosen number and updates the response accordingly.

## Future Improvements

- Add a restart button to let players play again without refreshing the page.
- Implement animations or visual effects for correct guesses or when a player runs out of attempts.
- Offer difficulty levels (e.g., more/less number of attempts, wider/narrower range of numbers).
<<<<<<< HEAD
=======

>>>>>>> a36815cb0b96a8299ef42b003385872895cd004f
