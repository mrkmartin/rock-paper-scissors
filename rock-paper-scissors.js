function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  let computerChoice;
  //   console.log(rand);
  if (rand === 0) {
    computerChoice = "Rock";
    // console.log(computerChoice);
  } else if (rand === 1) {
    computerChoice = "Paper";
    // console.log(computerChoice);
  } else {
    computerChoice = "Scissors";
    // console.log(computerChoice);
  }
}

getComputerChoice();
