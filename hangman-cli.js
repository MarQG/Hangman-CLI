var Game = require("./scripts/game.js");
var inquirer = require("inquirer");

var runP = true;

function runProgram(run){
    if(run){
        inquirer.prompt([
            {
                name: "confirm",
                type: 'confirm',
                message: "Would you like to play Hangman?"
            }
        ]).then(function(answer){
            if(answer.confirm){
                var newGame = new Game();
                newGame.getGuess(function(){
                    runProgram(run);
                });
                //runProgram(run);
            } else {
                run = answer.confirm;
                runProgram(run);
            }
        });
    } else {
        console.log( "Thanks for playing! Exiting Program...")
    }
}

runProgram(runP);


// prompts if they want to play hangman
    //if they want to play
        //play hangman game
    // if not
        // exit program


// CLI runs program
    // Takes user Command and starts or exits program
        // Start
        // Asks if User wants to play Hangman
            // Run Hangman Game
                // Hamgman Game asks user to guess a random word
                    // Randomly Picks a word
                    // Prompts User for Input
                        // Check Guesses Left
                            // Display Current Word to User
                            // Check User Input
                                // check against avaiable Letters
                                    // If Not avaiable prompt user again
                                    // else
                                        // Check User Guess to Current Word
                                            // if guess is in word
                                            // Update word
                                            // if goodGuesses match current word length 
                                                // show win
                                                // gameOver
                                            // prompt user input
                                        // else
                                            // remove a guess
                                            // prompt user input
                        // Game over
                            // if Win true
                                //Show win
                            // else
                                // Show lose
                            // Prompt if they want to play again
                    // Exits when Game is Over
            // Ask if they want to play again

        // Exit
            // Close Program