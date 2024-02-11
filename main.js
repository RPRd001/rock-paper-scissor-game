// Initializing buttons and options
const gameContainer = document.querySelector('.container');
const playButton = document.querySelector('#play');
const options = document.querySelector('.options');
const selectedOption = document.querySelectorAll('.select-option')
const userOptionImage = document.querySelector('#user-selection-img');
const computerOptionImage = document.querySelector('#computer-selection-img');
const resultMessage = document.querySelector('.result');

// Adding eventListeners for the Play and Reset buttons
playButton.addEventListener('click', playRound);

// Bank of options for the Computer to randomly select one of them
const choices = ['rock', 'paper', 'scissors'];

// Computer and Player Selection Variables
let playerSelection = "";
let computerSelection = "";

// Changing the user image of the selection to make it correspond to the selected options:
selectedOption.forEach(option => {
    option.addEventListener('click', () => {
        if (option.value == 'paper') {
            userOptionImage.src = "./img/paper.png"
        }
        else if (option.value == 'scissors') {
            userOptionImage.src = "./img/scissors.png"
        }
        else if (option.value == 'rock') {
            userOptionImage.src = "./img/rock.png"
        }
        else {
            userOptionImage.src = "./img/question.png"        
        }
    })
});

// Game Logic
function playRound(playerSelection, computerSelection) {
    /* 
        NOTE:

        - This lines of code basically capitalize the choices taken by the user
        and the computer, so when they are displayed in the alert message they
        are capitalized and therefore nicer to read:

        -! But somehow it didn't work (ERROR: charAt(0) is not a function)

        ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}
        ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}
    */

    // Taking the value from the options (select element)
    playerSelection = options.value;
    // Taking the value randomly from the choices array
    computerSelection = choices[Math.floor(Math.random() * choices.length)];

    if (playerSelection == computerSelection) {
        computerOptionImage.src = `./img/${computerSelection}.png`;
        gameContainer.setAttribute('style', 'box-shadow: 0px 0px 10px 10px white;')
        resultMessage.innerText = 'Drawn! Nobody won!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        computerOptionImage.src = `./img/${computerSelection}.png`;
        gameContainer.setAttribute('style', 'box-shadow: 0px 0px 10px 10px green;')
        resultMessage.innerText = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        computerOptionImage.src = `./img/${computerSelection}.png`;
        gameContainer.setAttribute('style', 'box-shadow: 0px 0px 10px 10px green;')
        resultMessage.innerText = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        computerOptionImage.src = `./img/${computerSelection}.png`;
        gameContainer.setAttribute('style', 'box-shadow: 0px 0px 10px 10px green;')
        resultMessage.innerText = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerOptionImage.src = `./img/${computerSelection}.png`;
        gameContainer.setAttribute('style', 'box-shadow: 0px 0px 10px 10px red;')
        resultMessage.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}