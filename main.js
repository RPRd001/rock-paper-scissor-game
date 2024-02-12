// Initializing buttons and options
const gameContainer = document.querySelector('.container');
const playButton = document.querySelector('#play');
const options = document.querySelector('.options');
const selectedOption = document.querySelectorAll('.select-option')
const userOptionImage = document.querySelector('#user-selection-img');
const computerOptionImage = document.querySelector('#computer-selection-img');
const resultMessage = document.querySelector('.result');
const computerScoreLabel = document.querySelector('.computer-score');
const playerScoreLabel = document.querySelector('.player-score');

// Counter Variable for the Rounds (max = 5 rounds)
let roundCount = 0;

// Bank of options for the Computer to randomly select one of them
const choices = ['rock', 'paper', 'scissors'];

// Computer and Player Variables
let playerSelection = "";
let computerSelection = "";
let computerScore = 0;
let playerScore = 0;

// Adding eventListeners for the Play and Reset buttons
playButton.addEventListener('click', playRound);


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
function playRound() {

    if (roundCount < 5) {
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
            playerScore++;
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            computerOptionImage.src = `./img/${computerSelection}.png`;
            gameContainer.setAttribute('style', 'box-shadow: 0px 0px 10px 10px green;')
            resultMessage.innerText = `You won! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }
        else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            computerOptionImage.src = `./img/${computerSelection}.png`;
            gameContainer.setAttribute('style', 'box-shadow: 0px 0px 10px 10px green;')
            resultMessage.innerText = `You won! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }
        else {
            computerOptionImage.src = `./img/${computerSelection}.png`;
            gameContainer.setAttribute('style', 'box-shadow: 0px 0px 10px 10px red;')
            resultMessage.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        }

        computerScoreLabel.innerText = `PC: ${computerScore}`;
        playerScoreLabel.innerText = `You: ${playerScore}`;
        roundCount++;
    }
    else if (roundCount == 5) {
        if (playerScore > computerScore) {
            alert("You Won!");
        }
        else if (playerScore < computerScore) {
            alert("The Computer Won!")
        }
        else {
            alert('Draw! Nobody Won');
        }
        roundCount = 0;
        computerScore = 0;
        playerScore = 0;
        computerScoreLabel.innerText = "";
        playerScoreLabel.innerText = "";
        resultMessage.innerText = "";
    }

    
}