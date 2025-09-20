function getComputerChoice() {
  const randomFromZeroToOne = Math.random();
  const randomFromOneToThree = Math.floor(randomFromZeroToOne * 3) + 1;
  switch (randomFromOneToThree) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;
    default:
      return undefined;
  }
}

// test output for getComputerChoice() function
for (let index = 1; index <= 10; index++) console.log(getComputerChoice());
