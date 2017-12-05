var Words = require("./words.js");
var Letters = require("./letters.js");
var inquirer = require("inquirer");
var colors = require("colors");

function Game(){
    this.newLetter = new Letters();
    this.newWord = new Words();
    this.gameOver = false;
    this.guesses = 7;
    this.currentWord = this.newWord.generateCurrentWord();
    this.displayWord = this.newWord.generateDisplayWord(this.currentWord);
    

    this.displayGame = function(){
        console.log("\nGuesses Left: " + colors.yellow(this.guesses));
        console.log(colors.cyan("\nCurrent Word: " + this.displayWord.join(" ") + "\n"));
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
                //console.log("\n");
                if(that.newLetter.checkIfValid(answer.userGuess)){
                    that.newLetter.removeAvailableLetter(answer.userGuess);
                    if(that.currentWord.includes(answer.userGuess)){
                        console.log(colors.green("\nCorrect!\n"));
                        that.displayWord = that.newWord.updateDisplayWord(answer.userGuess, that.currentWord, that.displayWord);
                        if(that.currentWord === that.displayWord.join("")){
                            console.log(colors.green("You won!\n"));
                            that.gameOver = true;     
                        }   
                    } else {
                        if(that.guesses > 0){
                            that.guesses--;
                            console.log(colors.red("Wrong!\n"));
                        } else {
                            console.log(colors.red("\nSorry you lost!\n"));
                            that.gameOver = true;
                        }
                    }
                    that.getGuess(callback);
                    
                } else {
                    if(answer.userGuess.length > 1){
                        console.log( colors.yellow(answer.userGuess + " was not a valid guess. Please enter a lowercase letter only."));
                    } else if(answer.userGuess.match(/^[a-z]+$/)){
                        console.log( colors.yellow(answer.userGuess + " has already been guessed."));
                    } else {
                        console.log( colors.yellow(answer.userGuess + " was not a valid guess. Please enter a lowercase letter only."));
                    }
                    that.getGuess(callback);
                }
                
            });
        } else {
            that.newWord.displayAnswer(this.currentWord);
            callback();
        }
    }
    
}


module.exports = Game;