
const choices = ['Rock', 'Paper', 'Scissors'];

let playerSelection = prompt('Choose - Rock, Paper or Scissors: ');
let computerSelection = choices[Math.floor(Math.random() * choices.length)];

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log('Drawn! Nobody won!');
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
}

console.log(playRound(playerSelection, computerSelection))
console.log("For a new Round, you can refresh this website")