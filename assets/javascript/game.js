var hang = {
  words: ["captain","cannon","sails","gallows","sword","blackpearl","treasure",],
  toBeGuessed: [],
  wrong: [],

  pickWord: function() {
    return [Math.floor(Math.random()*this.words.length)];
  },

  printWrong: function() {
    for (var i= 0; i<hang.wrong.length; i++) {
      document.querySelector("#used").innerHTML = hang.wrong[i];
    }
  }
};

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

//makes userGuess global
document.onkeyup = function(event){
 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 	console.log(userGuess);
};

//Replaces underscores with properly guessed letters
function updateSpaces() {
  for (var i=0; i<randomWord.length; i++){
   if(userGuess === randomWord[i]) {
     var fill = document.getElementsByClassName('spaces');
     fill[i].innerHTML=userGuess;
   }
  }
}


//calls the createSpaces function to create underscores equal to the length of the word to be guessed.
createSpaces();

//function to be ran for every user guess
document.onkeyup = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if(randomWord.indexOf(userGuess) !== -1 && hang.wrong.indexOf(userGuess) ===-1){
			console.log("Letter Contained");
      toWin++;
      console.log(toWin);
			updateSpaces();
		}

    else {
			console.log("Letter not Contained");
			guesses--;
      guessLeft = "<p>You have "+guesses+" guesses left</p>";
      document.querySelector("#guess").innerHTML = guessLeft;
			console.log(guesses);
			hang.wrong.push(userGuess);
      hang.printWrong();
			}

      if( guesses === 0) {
        alert("Sorry you ran out of guesses. Refresh this page to play again");
      }
};


console.log(randomIndex);
console.log(randomWord);
console.log(hang.words[randomIndex]);
console.log(guesses);
