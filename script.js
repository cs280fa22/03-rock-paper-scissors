const choices = ["rock", "paper", "scissors"];

function play (event) {
  const userChoice = event.target.id;
  console.log("user choice is", userChoice);

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log("computer choice is", computerChoice);
}