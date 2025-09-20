function getComputerChoice() {
  const randomFromZeroToOne = Math.random();
  const randomFromOneToThree = Math.floor(randomFromZeroToOne * 3) + 1;
  switch (randomFromOneToThree) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
    default:
      return undefined;
  }
}

function getHumanChoice() {
  const userChoice = prompt(
    'Your choice:  Enter 1 - for rock, 2 - for paper, 3 - for scissors'
  );
  switch (userChoice) {
    case '1':
      return 'rock';
    case '2':
      return 'paper';
    case '3':
      return 'scissors';
    default:
      1;
      return undefined;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (
      (humanChoice == 'rock' && computerChoice == 'scissors') ||
      (humanChoice == 'paper' && computerChoice == 'rock') ||
      (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (
      (humanChoice == 'rock' && computerChoice == 'rock') ||
      (humanChoice == 'paper' && computerChoice == 'paper') ||
      (humanChoice == 'scissors' && computerChoice == 'scissors')
    ) {
      console.log(`You are equal! ${humanChoice} equal to ${computerChoice}`);
      // humanScore++;
      // ComputerScore++;
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }
  for (let index = 1; index <= 5; index++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(
      'Round ' + index + ' You : ' + humanScore + ' Computer : ' + computerScore
    );
  }
  const result =
    humanScore > computerScore
      ? 'YOU WIN !!!'
      : humanScore < computerScore
      ? 'YOU LOSE !!!'
      : 'YOU EQUAL';
  console.log(result);
}

// test output for getComputerChoice() function
// for (let index = 1; index <= 10; index++) console.log(getComputerChoice());

// test output for getHumanChoice() function
// console.log(getHumanChoice());

playGame();
