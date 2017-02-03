// JavaScript Hi/Lo Game
// Purpose: Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
// If the user's guess is too high or too low, the computer notifies them of that
// Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
// Signature: Computer randomly generates a number. User inputs a number between 1 and 100 (inclusive) trying to guess the randomly generated number. computer notifies whether the number is higher or lower than the randomly generated number. Once number is guessed correctly, it displays that the user has won.
//  Examples:
var secretNum = Math.floor((Math.random() * 100) + 1);
console.log(secretNum);
var guessCount = 0;
console.log("Counter: " + guessCount);

function enter(x) {
  if(x.keyCode == 13) {
    hiLo();
  }
}

function hiLo() {
  //var name = prompt("Hello! Welcome to the Hi-Lo Game. What is your name?")
  var guess = parseInt(document.getElementById("guess").value);
  if (guess != guess/1 || guess % 1 != 0) {
     document.getElementById("prompt").innerHTML = "Your guess is invalid. Please enter an integer."
  }
  // var guessCount = 1
  if (secretNum != guess && guessCount < 7 && secretNum < guess) {
      document.getElementById("prompt").innerHTML = "Guess is too high. Please guess again.";
      console.log("Guess: " + guess);
      guess = "";
      guessCount++;
      console.log("Counter: " + guessCount);
  } else if (guess != guess/1 || guess % 1 != 0) {
      document.getElementById("prompt").innerHTML = "Your guess is invalid. Please enter an integer."
      guess = "";
  } else if (secretNum != guess && guessCount < 7 && secretNum > guess) {
      document.getElementById("prompt").innerHTML = "Guess is too low. Please guess again.";
      console.log("Guess: " + guess);
      guess = "";
      guessCount++;
      console.log("Counter: " + guessCount);
  } else if (secretNum === guess && guessCount < 7) {
      document.getElementById("prompt").innerHTML = "You Win!" ;
  } else {
      document.getElementById("prompt").innerHTML = "Congratulations You DIE!";
  }
}
