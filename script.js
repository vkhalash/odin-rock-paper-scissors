function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);

  switch (randomInt) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const containerRoundResult = document.querySelector("#round-result");
const containerRunningScore = document.querySelector("#running-score");
const containerGameResult = document.querySelector("#game-result");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

let computerScore = 0;
let userScore = 0;
let round = 0;

function playRound(userChoice, roundCount = 5) {
  if (round === 0) {
    containerGameResult.replaceChildren();
  }

  let computerChoice = getComputerChoice();
  let roundResult;

  if (computerChoice === userChoice) {
    roundResult = "Tie";
  } else if (rules[userChoice] === computerChoice) {
    roundResult = "You won the round";
    userScore++;
  } else {
    roundResult = "Computer won the round";
    computerScore++;
  }

  round++;

  containerRoundResult.textContent = `Round ${round}: ${roundResult}. You chose ${userChoice}, computer chose ${computerChoice}.`;
  containerRunningScore.textContent = `Score: ${userScore}-${computerScore}.`;

  if (round === roundCount) {
    let gameResult;

    if (computerScore === userScore) {
      gameResult = "Tie";
    } else if (userScore > computerScore) {
      gameResult = "You won the game";
    } else {
      gameResult = "Computer won the game";
    }

    containerGameResult.textContent = `${gameResult}. Score: ${userScore}-${computerScore}.`;

    computerScore = 0;
    userScore = 0;
    round = 0;
  }
}
