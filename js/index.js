let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
const hands = ["Rock", "Paper", "Scissors"]

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const title = document.querySelector("h1");
const subtitle = document.querySelector("#cta")
const images = document.querySelector("#hands")
const scoreLabels = document.querySelector("#score-labels")
const scoreContainer = document.querySelector("#score-container")
const resultContainer = document.querySelector("#result-container")
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");
const playAgainBtn = document.querySelector("#play-again-btn")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();

    playRound(playerSelection, computerSelection);

    if (playerScore === 3 || computerScore === 3) {
      declareWinner();
    }
  });
});

function computerPlay() {
  return hands[Math.floor(Math.random()*hands.length)];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    displayResults("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore = ++computerScore;
    keepComputerScore()
    displayResults(`${capitalize(computerSelection)} beats ${playerSelection}.`);
  } else {
    playerScore = ++playerScore;
    keepPlayerScore()
    displayResults(`${capitalize(playerSelection)} beats ${computerSelection}.`);
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str) {
  result.textContent = str;
}

function declareWinner() {
  clearContent();
  if (playerScore > computerScore) {
    winner.textContent = "You win!";
    playAgainBtn.innerText = "Play Again";
  } else {
    winner.textContent = "You lost.";
    playAgainBtn.innerText = "Try Again?";
  }
  winner.textContent = str;
}

function clearContent() {
  title.style.display = "none";
  subtitle.style.display = "none";
  images.style.display = "none";
  scoreLabels.style.display = "none";
  scoreContainer.style.display = "none";
  resultContainer.style.display = "none";

  playAgainBtn.addEventListener("click", () => {
  title.style.display = "block";
  subtitle.style.display = "block";
  images.style.display = "flex";
  scoreLabels.style.display = "flex";
  scoreContainer.style.display = "flex";
  resultContainer.style.display = "block";
  resetGame();
  })
}

function resetGame() {
  result.textContent = "";
  playerScore = 0;
  computerScore = 0;
  keepPlayerScore();
  keepComputerScore();
}

function keepPlayerScore() {
  let playerScoreBox = document.querySelector("#player-score");
  playerScoreBox.textContent = playerScore;
}

function keepComputerScore() {
  let computerScoreBox = document.querySelector("#computer-score");
  computerScoreBox.textContent = computerScore;
}

