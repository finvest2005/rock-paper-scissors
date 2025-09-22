let humanScore = 0;
let computerScore = 0;
let round = 0;
const compChoiceText = document.querySelector('#compChoice');
const info = document.querySelector('#info');
const user = document.querySelector('#user');
const comp = document.querySelector('#comp');
const winner = document.querySelector('#winner');

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

function getHumanChoice(userChoice) {
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

function playRound(humanChoice, computerChoice) {
  round++;
  humanChoice = humanChoice.toLowerCase();
  if (
    (humanChoice == 'rock' && computerChoice == 'scissors') ||
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissors' && computerChoice == 'paper')
  ) {
    humanScore++;
    info.textContent = `Round: ${round} You win! ${humanChoice} beats ${computerChoice}`;
  } else if (
    (humanChoice == 'rock' && computerChoice == 'rock') ||
    (humanChoice == 'paper' && computerChoice == 'paper') ||
    (humanChoice == 'scissors' && computerChoice == 'scissors')
  ) {
    info.textContent = `Round: ${round} You are equal! ${humanChoice} equal to ${computerChoice}`;
  } else {
    computerScore++;
    info.textContent = `Round: ${round} You lose! ${computerChoice} beats ${humanChoice}`;
  }
  compChoiceText.textContent = 'Computer choose ' + computerChoice;
  user.textContent = 'Your score: ' + humanScore;
  comp.textContent = 'Comp score: ' + computerScore;
  winner.textContent = ``;

  if (humanScore == 5) {
    winner.textContent = `You WIN !!!`;
    humanScore = 0;
    computerScore = 0;
    round = 0;
  } else if (computerScore == 5) {
    winner.textContent = `Computer WIN !!!`;
    humanScore = 0;
    computerScore = 0;
    round = 0;
  }
}

const btn1 = document.querySelector('#id1');
const btn2 = document.querySelector('#id2');
const btn3 = document.querySelector('#id3');
btn1.addEventListener('click', function (e) {
  playRound(getHumanChoice('1'), getComputerChoice());
});
btn2.addEventListener('click', function (e) {
  playRound(getHumanChoice('2'), getComputerChoice());
});
btn3.addEventListener('click', function (e) {
  playRound(getHumanChoice('3'), getComputerChoice());
});
