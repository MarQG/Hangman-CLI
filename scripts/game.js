var Words = require("./words.js");
var Letters = require("./letters.js");
var inquirer = require("inquirer");
var colors = require("colors");

function Game(){
    this.newLetter = new Letters();
    this.newWord = new Words();
    this.gameOver = false;
    this.guesses = 5;
    this.currentWord = this.newWord.generateCurrentWord();
    this.displayWord = this.newWord.generateDisplayWord(this.currentWord);
    

    this.displayGame = function(){
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
                        console.log(colors.green("Correct!"));
                        that.displayWord = that.newWord.updateDisplayWord(answer.userGuess, that.currentWord, that.displayWord);
                        if(that.currentWord === that.displayWord.join("")){
                            console.log(colors.green("You won!"));
                            that.gameOver = true;     
                        }   
                    } else {
                        if(that.guesses > 0){
                            that.guesses--;
                            console.log(colors.red("Wrong!"));
                        } else {
                            console.log(colors.red("Sorry you lost!"));
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
            callback();
        }
    }
    
}


module.exports = Game;