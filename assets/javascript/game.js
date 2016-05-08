var words = {
  pirate: ["p","i","r","a","t","e"],
  blackpearl: ["b","l","a","c","k","p","e","a","r","l"],
  treasure: ["t","r","e","a","s","u","r","e"],
  cannon: ["c","a","n","n","o","n"],
  captain: ["c","a","p","t","a","i","n"],
  firstmate: ["f","i","r","s","t","m","a","t","e"],
  plank: ["p","l","a","n","k"],
  anchor: ["a","n","c","h","o","r"],
  parrot: ["p","a","r","r","o","t"],
  kraken: ["k","r","a","k","e","n"],
  sword: ["s","w","o","r","d"],
};
var keys = Object.keys(words);
var randomWord = keys[Math.floor(Math.random()*keys.length)];
alert(randomWord);
var guesses = randomWord.length*2;
var displayG = "<p>Number of guesses remaining: "+guesses+"</p>";
document.querySelector('#console').innerHTML = displayG;
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  if(randomWord.includes(userGuess) === true) {
    alert("the random word contains "+userGuess);
  }
  else {
    alert("That letter is not in the word");
    guesses--;
    displayG = "<p>Number of guesses remaining: "+guesses+"</p>";
    document.querySelector('#console').innerHTML = displayG;
  }

};
