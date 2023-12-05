const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    // return DEFAULT_USER_CHOICE; // commented out as we want to see default arguments of a function
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// Arrow Function examples:-

// const add1 = (a, b) => a + b; // only one return statement so we can omit the `return` keyword

// const add2 = function(a, b) {
//   return a + b;
// }
// here both add1 and add2 performs same function 

// Default Argument in Function should be the last argument
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  (cChoice === pChoice) 
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK) 
    ? RESULT_PLAYER_WINS 
    : RESULT_COMPUTER_WINS;

  // if (cChoice === pChoice){
  //   return RESULT_DRAW;
  // } else if (
  //   (cChoice === ROCK && pChoice === PAPER) || 
  //   (cChoice === PAPER && pChoice === SCISSORS) ||
  //   (cChoice === SCISSORS && pChoice === ROCK)
  //   ){
  //   return RESULT_PLAYER_WINS;
  // } else {
  //   return RESULT_COMPUTER_WINS;
  // }
}

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice(); // might be undefined
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice, playerChoice);
  }
  // let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you`;
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you`;
  if (winner === RESULT_DRAW){
    message = message + ' had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ' won.'
  } else {
    message = message + ' lost.'
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game
// Here we are using `rest parameter`(below `...numbers` is a `rest` parameter) which looks like a `spread operator` but works differently 
// and we put always at the end in the parameters list as shown below
// Also learning Callback function
const sumUp = (resultHandler, ...numbers) => {
  // creating functions inside functions here below function is locally scoped i.e can be used within this function
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }
  let sum = 0;
  for (const num of numbers) {
    sum  += validateNumber(num)
  }
  resultHandler(sum);
};

// before es6 `arguments` keyword is used as `rest operator` but keep in mind it works with `function` keyword 
const subtractUp = function () {
  let sub = 0;
  for (const num of arguments) { // but don't use this
    sub -= num;
  }
  return sub;
}

const showResult = (result) => {
  alert('The result after adding all numbers is: ' + result)
};

sumUp(showResult, 1, 5, 10, 'sun', -3, 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);

console.log(subtractUp(1, 10, 15, 20));