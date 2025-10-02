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

function playRound(computerChoice, userChoice) {
  let roundResult;

  if (computerChoice === userChoice) {
    roundResult = "Tie";
  } else if (rules[userChoice] === computerChoice) {
    roundResult = "You won the round";
  } else {
    roundResult = "Computer won the round";
  }

  const roundMessage = `${roundResult}. You chose ${userChoice}, computer chose ${computerChoice}.`;
  console.log(roundMessage);
  alert(roundMessage);
}

const computerChoice = getComputerChoice();
const userChoice = getUserChoice();
playRound(computerChoice, userChoice);
