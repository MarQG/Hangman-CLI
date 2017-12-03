

function Letters(){

    this.avaiableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.checkIfValid = function(guess){
        return (this.avaiableLetters.indexOf(guess) > -1);
    }

    this.checkLetterInWord = function(guess, word){

    }

    this.removeAvailableLetter  = function(guess){
        this.avaiableLetters = this.avaiableLetters.filter(function(e) {
            return e !== guess;
        });
    }

}

module.exports = Letters;

// function checkUserGuess(currentWord, currentGuess)
    // return if currentGuess is in currentWord

// function checkUserGuessValid(currentGuess)
    //if currentGuess matches avaiableGuesses
        // if so
            // return the userGuess
        // else
            // return string userGuess invalid