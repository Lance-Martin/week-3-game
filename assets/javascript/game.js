var hang = {
  words: ["captain","cannon","sails","gallows","sword","blackpearl","treasure",],
  wrong: [],
  wins: 0,

  pickWord: function() {
    return [Math.floor(Math.random()*this.words.length)];
  },

  printWrong: function() {
    document.querySelector("#used").innerHTML = this.wrong.toString();
  },

  writeWins: function() {
    var win= "<p>Wins: "+this.wins+"</p>";
    document.querySelector("#wins").innerHTML = win;
  },
};

//Sets toWin to 0. For every correct letter guessed add 1 to toWin. Once toWin = randomWord.length then the player wins
var toWin = 0;

//first variable calls the function pickWord to get a random index # from hang.words   The 2nd variable randomWord is set equal to the string value of randomIndex
var randomIndex = hang.pickWord();
var randomWord = hang.words[randomIndex];

//Sets the number of guesses to twice the length of the word to be guessed
var guesses = randomWord.length*2;

//Displays the amount of guesses left
var guessLeft = "<p>You have "+guesses+" guesses left</p>";
document.querySelector("#guess").innerHTML = guessLeft;

//Creates blank spaces equal to the length of the random word chosen.
function createSpaces() {
  var spaces = "";
  for (var i=0;i<randomWord.length; i++) {
    spaces += "<p class='spaces'>_</p>";
    document.querySelector("#word").innerHTML = spaces;
  }
}

//makes variable userGuess global
document.onkeyup = function(event){
 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 	console.log(userGuess);
};

//Replaces underscores with properly guessed letters
function updateSpaces() {
  for (var i=0; i<randomWord.length; i++){
   if(userGuess === randomWord[i]) {
     var fill = document.getElementsByClassName('spaces');
     fill[i+1].innerHTML=userGuess;
     toWin++;
     console.log(toWin);
   }
  }
}


//calls the createSpaces function to create underscores equal to the length of the word to be guessed.
createSpaces();

//Lets the user know they start with 0 wins
hang.writeWins();

//function to be ran for every user guess
document.onkeyup = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //if the user guess is part of the randomWord
    if(randomWord.indexOf(userGuess) !== -1 && hang.wrong.indexOf(userGuess) ===-1){
			console.log("Letter Contained");
      console.log(toWin);
			updateSpaces();
		}

    //if the user guess isn't part of the word
    else {
			console.log("Letter not Contained");
			guesses--;
      guessLeft = "<p>You have "+guesses+" guesses left</p>";
      document.querySelector("#guess").innerHTML = guessLeft;
			console.log(guesses);
			hang.wrong.push(userGuess);
      console.log(hang.wrong);
      hang.printWrong();
			}

      //if the user runs out of guesses alert them they've lost
      if( guesses === 0) {
        alert("Your pirate has been hung.");
        hang.pickWord();
        createSpaces();
        console.log(randomWord);
        guesses= randomWord.length*2;
      }

      //if the user guesses the word then add 1 to wins and reset the game
      if( toWin === randomWord.length) {
        toWin= 0;
        hang.wins++;
        hang.writeWins();
        hang.pickWord();
        createSpaces();
        alert("You saved your pirate from the hangman, and you found some treasure while you were at it!");
      }
};
console.log(randomWord);
console.log(guesses);
