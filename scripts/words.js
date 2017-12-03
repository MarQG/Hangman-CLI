function Words(){
    this.wordsArr = ["richter belmont", 'dracula tepes'];
    this.generateDisplayWord = function(word){
        var genDisplayWord = [];
        for(var i=0; i< word.length; i++){
	        if(word.charAt(i).match(/[a-z]/i)){
	          genDisplayWord.push("_");
	        } else {
	          genDisplayWord.push(" ");
	        }
        }
        return genDisplayWord;
    }

    this.generateCurrentWord = function(){
        return this.wordsArr[Math.floor(Math.random()* this.wordsArr.length)];
    }

    this.updateDisplayWord = function(userGuess, currentWord, displayWord){
        for(var i=0; i< currentWord.length; i++){
            if(currentWord.charAt(i)===userGuess){
              displayWord[i] = userGuess;
            }
        }
        return displayWord;
    }
}

module.exports = Words;

//pick a word from our word bank
    // select current word

// function pickWord()
    // return randomWord from wordsArray

// function updateCurrentWord(currentWord, currentGuess)
    //check if currentGuess exists
            // process the word showing the currentGuess letters
                //remove currentGuess from availableGuesses
                // return displayUpdatedWord
        // else
            // process the word and show current word
                // return displayedWord

    // return string of processed word
