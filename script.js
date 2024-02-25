
// Randomly return either Rock, Paper or Scissors

const choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let message = '';
let roundPlayed = 0;
let roundsToPlay = 5;

let container = document.querySelector('#container');
let messageContainer = document.querySelector('#message');

let playerScoreBoard = document.querySelector('#player-score');
playerScoreBoard.textContent = 0;

let computerScoreBoard = document.querySelector('#computer-score');
computerScoreBoard.textContent = 0;

let rock = document.querySelector('#rock');
rock.addEventListener('click', () =>  playGame('rock'));

let paper = document.querySelector('#paper')
paper.addEventListener('click', () => playGame('paper'));

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playGame('scissors'));

let resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => reset())

function reset(){
    computerScore = 0;
    playerScore = 0;
    roundPlayed = 0;
    messageContainer.textContent = '';
    playerScoreBoard.textContent = 0;
    computerScoreBoard.textContent = 0;
}

function playGame(playerSelection){

    if(roundPlayed <= roundsToPlay){
        playRound(playerSelection) 

        messageContainer.textContent = message

        playerScoreBoard.textContent = playerScore;

        computerScoreBoard.textContent = computerScore;

        return roundPlayed++;
    }

    return determineWinner();
}

function determineWinner(){
    if (playerScore === computerScore) {
        return messageContainer.textContent = `The game is tied Computer: ${computerScore} vs Player: ${playerScore}`;
     }
 
     if (playerScore > computerScore) {
        return messageContainer.textContent = `You win with a score of ${playerScore} vs ${computerScore}`;
     }
 
     return messageContainer.textContent = `Computer wins with a score of ${computerScore} vs ${playerScore}`;
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === playerSelection) {
        message = 'Its a tie! Please select again';   
        return;
    }

    if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {

        message = `You win his round, ${playerSelection} beats ${computerSelection}`;

        return playerScore++;
    }

    if (computerSelection === "rock" && playerSelection === "scissors"
        || computerSelection === 'paper' && playerSelection === 'rock'
        || computerSelection === 'scissors' && playerSelection === 'paper') {

        message = `You lose this round, ${computerSelection} beats ${playerSelection}`;

        return computerScore++;
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}