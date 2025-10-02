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

function getUserChoice() {
  while (true) {
    const userChoice = prompt('Enter "rock", "paper", or "scissors":')
      ?.trim()
      .toLowerCase();

    if (!userChoice) {
      alert("Input cannot be empty.");
      continue;
    }

    if (["rock", "paper", "scissors"].includes(userChoice)) {
      return userChoice;
    }

    alert("Invalid input. Try again.");
  }
}

const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function playGame(roundCount = 5) {
  let computerScore = 0;
  let userScore = 0;

  function playRound(round, computerChoice, userChoice) {
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

    const roundMessage = `Round ${round}: ${roundResult}. You chose ${userChoice}, computer chose ${computerChoice}.`;
    console.log(roundMessage);
    alert(roundMessage);
  }

  for (let round = 1; round <= roundCount; round++) {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();
    playRound(round, computerChoice, userChoice);
  }

  let gameResult;

  if (computerScore === userScore) {
    gameResult = "Tie";
  } else if (userScore > computerScore) {
    gameResult = "You won the game";
  } else {
    gameResult = "Computer won the game";
  }

  const gameMessage = `${gameResult}. Score: ${userScore}-${computerScore}.`;
  console.log(gameMessage);
  alert(gameMessage);
}

function startGame() {
  do {
    playGame();
  } while (confirm("Do you want to restart the game?"));
}

startGame();
