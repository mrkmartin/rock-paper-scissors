let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function game() {
  const computerSelection = getComputerChoice();
  const playerSelection = prompt(
    "Please pick between Paper, Rock and Scissors",
    ""
  ).toLowerCase();

  return playRound(playerSelection, computerSelection);
}

game();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    roundWinner = "tie";
  }
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
  updateScore(playerScore, computerScore);
  isGameOver();
}

function updateScore(playerScore, computerScore) {
  if (roundWinner === "tie") {
    console.log("It's a tie!");
  } else if (roundWinner === "player") {
    console.log("You won!");
  } else if (roundWinner === "computer") {
    console.log("You lost!");
  }

  console.log(`Player: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);
}

function isGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      console.log("Game Over!");
      console.log("Congratulations! You win!");
    } else {
      console.log("Game Over!");
      console.log("Sorry, you lose!");
    }
    return;
  } else {
    return game();
  }
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  computerSelection =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
  if (winner === "player") {
    console.log(`${playerSelection} beats ${computerSelection}`);
    return;
  }
  if (winner === "computer") {
    console.log(`${playerSelection} is beaten by ${computerSelection}`);
    return;
  }
  console.log(`${playerSelection} ties with ${computerSelection}`);
}
