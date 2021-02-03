// cached nodes

const youChose = document.querySelector('#youChose');
const compChose = document.querySelector('#compChose');
const gameResults = document.querySelector('#gameResults');


const getUserChoice = userInput => {
  userInput = usersChoice.value.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
     return 'Error!! Paper, Rock or Scissors only!'
  }

}

const getComputerChoice = () => {
  let compChoice = Math.floor(Math.random() * 3);
  if(compChoice === 0) {
    return 'rock';
  } else if(compChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb') {
    return 'You blew the computer up!!! You win!!!'
  }
  
  if(userChoice === computerChoice) {
    return 'Tie game!!';
  }

  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'The computer won!!';
    } else {
      return 'You won!!';
    }
  }

  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'The computer won!!';
    } else {
      return 'You won!!';
    }
  }

  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'The computer won!!';
    } else {
      return 'You won!!';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  youChose.textContent = 'You threw: ' + userChoice;
  compChose.textContent = 'The computer threw: ' + computerChoice;
  gameResults.textContent = determineWinner(userChoice, computerChoice);
}

