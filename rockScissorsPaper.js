const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput ==='paper' || userInput ==='scissors') {
    return userInput;
  } else {
  console.log('Error!');
}
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock'
      break;
      case 1:
      return 'paper'
      break;
      case 2:
      return 'scissor'
      break;
  }
};
const determineWinner = (userChoice,computerChoice) => {
  if (userChoice ===computerChoice ) {
    return 'tie'
  } if (userChoice === 'rock') {
    if (computerChoice === 'paper')
      return 'computer won!'
  } else {
    return 'User won!'
  
  } if (userChoice === 'paper') {
    if (computerChoice === 'scissors')
      return 'computer won!'
  } else {
    return 'User won!'
  } 
  if (userChoice === 'scissor') {
    if (computerChoice === 'rock')
      return 'computer won!'
  } else {
    return 'User won!'
  }
}

const playgame = () => {
  const userChoice = getUserChoice('paper')
  const computerChoice = getComputerChoice()
  console.log('Your choice is '+ userChoice);
  console.log('Computer choice is '+ computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
}
playgame();
