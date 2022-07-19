//objective
// user guess one of "scissors", "paper", or "stone",
// program randomly chooses scissors, paper, or stone,
// program outputs whether the user won, the program won, or it's a draw.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors.
//If both parties choose the same object, it's a draw.

//what i need
//1. function to capture user guess
//2. function for program to random choose scissors, paper, or stone
// 2.1 that means a random number generator
// 2.2 global variable : 1 = scissors, 2, = paper, 3 = stone

// function
// if output is 1, = scissors
// if output is 2, = paper
// if output is 3, = stone

//3. create compiler function that takes input and has the if else conditions. Inside the main function, call this compiler function and put in guess, as well as the computer's guesses.

//global variable
var computerHand = 0;

//random number generator
var randNumGen = function () {
  var numGen = Math.floor(Math.random() * 3 + 1);
  return numGen;
};

//creating a function to call the random number generator and matching the generated value to 1 = scissors, 2, = paper, 3 = stone
var computerGuess = function () {
  var comGuess = randNumGen();
  if (comGuess == 1) {
    computerHand = "scissors";
  }
  if (comGuess == 2) {
    computerHand = "paper";
  }
  if (comGuess == 3) {
    computerHand = "stone";
  }
  //returning the generated value to the global variable
  return computerHand;
};

//this function contains the actual game logic. It has a 'stand in' input of myGuess.
var compiler = function (myGuess) {
  // creating a variable for the computerGuess function
  var guess = computerGuess();
  //draw condition
  if (myGuess == guess) {
    return `It's a draw. Both parties guessed ${myGuess}.`;
  }
  //normal game function conditions
  if (myGuess == "scissors" && guess == "paper") {
    return `You win. The computer guessed ${guess} and you guessed ${myGuess}.`;
  }
  if (myGuess == "scissors" && guess == "stone") {
    return `You lose. The computer guessed ${guess} and you guessed ${myGuess}.`;
  }
  if (myGuess == "paper" && guess == "stone") {
    return `You win. The computer guessed ${guess} and you guessed ${myGuess}.`;
  }
  if (myGuess == "paper" && guess == "scissors") {
    return `You lose. The computer guessed ${guess} and you guessed ${myGuess}.`;
  }
  if (myGuess == "stone" && guess == "scissors") {
    return `You win. The computer guessed ${guess} and you guessed ${myGuess}.`;
  }
  if (myGuess == "stone" && guess == "paper") {
    return `You lose. The computer guessed ${guess} and you guessed ${myGuess}.`;
    // data validation where if user guess anything not scissors paper or stone, this else condition triggers.
  } else {
    return "invalid input. Please input in only scissors, paper or stone.";
  }
};

var main = function (input) {
  //calling the compiler function and putting in the parameter of input
  var myOutputValue = compiler(input);
  console.log(computerHand);
  console.log(myOutputValue);
  return myOutputValue;
};
