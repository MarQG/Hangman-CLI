function Letters(){

    this.avaiableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.checkIfValid = function(guess){
        return (this.avaiableLetters.indexOf(guess) > -1);
    }

    this.removeAvailableLetter  = function(guess){
        this.avaiableLetters = this.avaiableLetters.filter(function(e) {
            return e !== guess;
        });
    }

}

module.exports = Letters;