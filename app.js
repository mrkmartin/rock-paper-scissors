function computerPlay() {
  // Generate a random integer from 1 to 3 representing computer's choice
  let randomInt = Math.floor(Math.random() * 3) + 1;
  // Assign rock, paper, or scissors to the computer's choice based on the random integer
  if (randomInt === 1) {
    return "rock";
  } else if (randomInt === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerPlay() {
  // Prompt the user to enter their choice of rock, paper, or scissors
  let playerChoice = prompt("Enter Rock, Paper, or Scissors:");

  // If the player clicks "cancel", exit the game
  if (playerChoice === null) {
    alert("Goodbye!");
    return;
  }

  // Convert the player's choice to lowercase for case-insensitive matching
  playerChoice = playerChoice.toLowerCase();

  // Keep prompting the user until they enter a valid choice or click "cancel"
  while (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    playerChoice = prompt("Invalid choice. Enter Rock, Paper, or Scissors:");

    // If the player clicks "cancel", reset the game
    if (playerChoice === null) {
      game();
      return;
    }

    playerChoice = playerChoice.toLowerCase();
  }

  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  // Determine the winner of a single round
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;
  let roundResult;
  while (playerScore < 5 && computerScore < 5) {
    playerSelection = playerPlay();
    // If playerPlay() returns undefined, exit the game
    if (playerSelection === undefined) {
      return;
    }
    computerSelection = computerPlay();
    roundResult = playRound(playerSelection, computerSelection);
    console.log(
      `Player: ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } | Computer: ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } -> ${roundResult}`
    );
    if (roundResult === "You win!") {
      playerScore++;
    } else if (roundResult === "Computer wins!") {
      computerScore++;
    }
    console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
  }
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
  let playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    // Reset the scores and play again
    game();
  } else {
    console.log("Thanks for playing!");
  }
}

// Start the game
game();
