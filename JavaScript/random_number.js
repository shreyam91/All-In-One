// write a js program to generate a random number and store it in a variable. The program then takes an input from the user to tell themm whether they guessed the number was correct or greater & lesser than the actual number .

var randomNumber = Math.floor(Math.random() * 100) + 1;

var userGuess = prompt("Guess a number between 1 and 100");

while (userGuess!== randomNumber) {
  if (userGuess > randomNumber) {
    alert("Too high");
    userGuess = prompt("Guess a number between 1 and 100");
  } else if (userGuess < randomNumber) {
    alert("Too low");
    userGuess = prompt("Guess a number between 1 and 100");
  } else {
    alert("You guessed it right");
    break;
  }
}