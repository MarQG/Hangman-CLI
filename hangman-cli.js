var Game = require("./scripts/game.js");
var inquirer = require("inquirer");

var runP = true;

function runProgram(run){
    if(run){
        inquirer.prompt([
            {
                name: "confirm",
                type: 'confirm',
                message: "Would you like to play Hangman: Final Fantasy Edition?"
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
        console.log( "\nThanks for playing! Exiting Program...\n")
    }
}

runProgram(runP);