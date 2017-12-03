var Words = require("./words.js");
var Letters = require("./letters.js");
var inquirer = require("inquirer");

function Game(){
    this.newLetter = new Letters();
    this.newWord = new Words();
    this.gameOver = false;
    this.guesses = 5;
    this.currentWord = this.newWord.generateCurrentWord();
    this.displayWord = this.newWord.generateDisplayWord(this.currentWord);
    

    this.displayGame = function(){
       console.log(this.currentWord);
       console.log("Current Word: " + this.displayWord.join(" "));
    }

    this.getGuess = function(callback){
        var that = this;
        if(!this.gameOver){
            that.displayGame();
            inquirer.prompt([
                {
                    name: "userGuess",
                    type: "text",
                    message: "Guess a letter?"
                }
            ]).then(function(answer){
                if(that.newLetter.checkIfValid(answer.userGuess)){
                    that.newLetter.removeAvailableLetter(answer.userGuess);
                    if(that.currentWord.includes(answer.userGuess)){
                        console.log("Correct!");
                        that.displayWord = that.newWord.updateDisplayWord(answer.userGuess, that.currentWord, that.displayWord);
                        that.displayGame();
                        if(that.currentWord === that.displayWord.join("")){
                            console.log("You won!");
                            that.gameOver = true;     
                        }   
                    } else {
                        if(that.guesses > 0){
                            that.guesses--;
                            console.log("Wrong!");
                        } else {
                            console.log("Sorry you lost!");
                            that.gameOver = true;
                        }
                    }
                    that.getGuess(callback);
                    
                } else {
                    if(answer.userGuess.length > 1){
                        console.log( answer.userGuess + " was not a valid guess. Please enter a lowercase letter only.");
                    } else if(answer.userGuess.match(/^[a-z]+$/)){
                        console.log( answer.userGuess + " has already been guessed.");
                    } else {
                        console.log( answer.userGuess + " was not a valid guess. Please enter a lowercase letter only.");
                    }
                    that.getGuess(callback);
                }
                
            });
        } else {
            callback();
        }
    }
    
}


module.exports = Game;
// initialze the game
    // set all variables to start values
        // load a new word
        // set gameOver to false;
        // set guess to 12;

// display the prompt to the user using inquirer
    // take the current word and display current word with _
    // get user input
        // check if input is valid with Letter.checkValidGuess()
            // if it is valid
                // check user guess Letter vs current word
                    // if match
                        // Update current word
                    // else 
                        // remove guess
                        // if guess < 0
                            // gameOver = true;
                            // reset the game
                        // else 
                            // prompt user for new guess (recursive)
            // else
                // tell user input invalid please input proper guess
                    //prompt for new user guess (recursive)

// prompt user for game reset
    //if user whats to play again
        // startGame
        // prompt user for guess
    // else 
        //exit game