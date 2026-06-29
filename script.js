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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  let roundResult;

  if (computerChoice === userChoice) {
    roundResult = "Tie";
  } else if (rules[userChoice] === computerChoice) {
    roundResult = "You won the round";
  } else {
    roundResult = "Computer won the round";
  }

  const roundMessage = `Round result: ${roundResult}. You chose ${userChoice}, computer chose ${computerChoice}.`;
  console.log(roundMessage);
  alert(roundMessage);
}
