let scores = {
  player: 0,
  computer: 0
};

const options = {
  rock: {
    name: 'Rock',
    beats: ['scissors']
  },
  paper: {
    name: 'Paper',
    beats: ['rock']
  },
  scissors: {
    name: 'Scissors',
    beats: ['paper']
  }
};

const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result > p');
const playerPick = document.getElementById('player-choice');
const computerPick = document.getElementById('computer-choice');

function getComputerChoice() {
  const choices = Object.keys(options);
  const randomInt = Math.floor(Math.random() * choices.length);
  return choices[randomInt];
}

function win(playerChoice, computerChoice) {
  scores.player++;
  playerScoreText.innerHTML = scores.player;
  computerScoreText.innerHTML = scores.computer;
  result.innerHTML = `${options[playerChoice].name} beats ${options[computerChoice].name}. You win!`;
  finalResult();

}

function lose(playerChoice, computerChoice) {
  scores.computer++;
  playerScoreText.innerHTML = scores.player;
  computerScoreText.innerHTML = scores.computer;
  result.innerHTML = `${options[computerChoice].name} beats ${options[playerChoice].name}. You lose!`;
  finalResult();
}

function draw(playerChoice, computerChoice) {
  result.innerHTML = `${options[playerChoice].name} and ${options[computerChoice].name}. It's a draw!`;
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  computerPick.innerHTML = options[computerSelection].name;

  const winningCombos = {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper']
  };

  if (winningCombos[playerSelection].includes(computerSelection)) {
    win(playerSelection, computerSelection);
  } else if (winningCombos[computerSelection].includes(playerSelection)) {
    lose(playerSelection, computerSelection);
  } else {
    draw(playerSelection, computerSelection);
  }
}


function finalResult() {
  if (scores.player === 5) {
    setTimeout(() => {
      alert('Congratulations, you win the game!');
      confirmPlayAgain();
    }, 200);
  } else if (scores.computer === 5) {
    setTimeout(() => {
      alert('Sorry, you lose the game!');
      confirmPlayAgain();
    }, 200);
  }
}

function resetGame() {
  scores = {
    player: 0,
    computer: 0
  };
  playerScoreText.innerHTML = 0;
  computerScoreText.innerHTML = 0;
  result.innerHTML = 'Choose rock, paper, or scissors to start playing!';
  playerPick.innerHTML = '';
  computerPick.innerHTML = '';
  computerPick.style.display = 'none';
}

function confirmPlayAgain() {
  if (confirm('Do you want to play again?')) {
    resetGame();
  } else {
    resetGame();
    alert('Thanks for playing!');
  }
}

function main() {
  const optionsButtons = document.querySelectorAll('.choice');
  optionsButtons.forEach(option => {
    option.addEventListener('click', () => {
      playRound(option.id);
      playerPick.innerHTML = options[option.id].name;
      computerPick.style.display = 'block';
    });
  });
}

main();
