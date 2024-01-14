
// Randomly return either Rock, Paper or Scissors

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    const choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}
