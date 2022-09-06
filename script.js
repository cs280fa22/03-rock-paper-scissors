const choices = ["rock", "paper", "scissors"];

function play (event) {
  const userChoice = event.target.id;
  console.log("user choice is", userChoice);

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log("computer choice is", computerChoice);

  if (computerChoice === userChoice) {
    console.log("Draw!");
  } else if (computerChoice === "rock" && userChoice === "paper") {
    console.log("You win!");
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    console.log("You lost!");
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    console.log("You win!");
  } else if (computerChoice === "paper" && userChoice === "rock") {
    console.log("You lose!");
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    console.log("You win!");
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    console.log("You lose!");
  }  
}