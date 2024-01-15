
// Randomly return either Rock, Paper or Scissors

const choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection) {

    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    

    while (!choices.includes(playerSelection)) {
        playerSelection = prompt('Wrong selection, Please enter either Rock, Paper or Scissors')
    }

    if (computerSelection === playerSelection) {
        playerSelection = prompt('Its a tie! Please select again');
        return playRound(playerSelection);
    }

    if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {

        console.log(`You Win, ${playerSelection} beats ${computerSelection}`)

        return playerScore++;
    }

    if (computerSelection === "rock" && playerSelection === "scissors"
        || computerSelection === 'paper' && playerSelection === 'rock'
        || computerSelection === 'scissors' && playerSelection === 'paper') {

        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);

        return computerScore++;
    }
}

function game(rounds = 5) {

    for (let i = 0; i < rounds; i++) {
        let playerSelection = prompt("Enter Selection")
        playRound(playerSelection)
    }

    if (playerScore > computerScore) {
        return `Player wins with a score of ${playerScore}`
    }

    return `Computer wins with a score of ${computerScore}`;

}


console.log(game());