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

// test output for getComputerChoice() function
for (let index = 1; index <= 10; index++) console.log(getComputerChoice());

// test output for getHumanChoice() function
console.log(getHumanChoice());
