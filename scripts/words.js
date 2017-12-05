function Words(){
    this.wordsArr = [
        'cloud strife', 
        'squall leonhart', 
        'lighning claire farron', 
        'vaan', 
        'noctis lucis caelum', 
        'tidus', 
        'terra branford', 
        'zidan tribal', 
        'hero of light', 
        'firion', 
        'luneth', 
        'cecil harvey', 
        'bartz klauser',
        'ramza beoulve',
        'marche radiuju',
        'luso clemens'
    ];
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

    this.displayAnswer = function(currentWord){
        var displayAnswer = []
        for(var i =0; i < currentWord.length; i++){
            displayAnswer.push(currentWord.charAt(i));
        }
        console.log("The answer is: " + displayAnswer.join(" "));
    }
}

module.exports = Words;