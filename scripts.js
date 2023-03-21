// Game options
const options = ['rock', 'paper', 'scissors'];

// Global variables that check the game score and if the game ended
let playerScore;
let computerScore;
let gameOver;

// Get all the divs were text changes during the game
const pscore = document.getElementById('pscore');
const cscore = document.getElementById('cscore');
const result = document.getElementById('result');

// Helper functions to update the score board, restart a game and computing the computer choice
const updateScores = () => {
    pscore.textContent = playerScore;
    cscore.textContent = computerScore;
}

const restartGame = () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    updateScores();
    result.textContent = 'Make your choice';
};
 
// When the script runs for the first time we run the restart game function
// so that we generate values for the score board and a default result text
restartGame();

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    return options[choice]
}

// Function to play a round and return the round result
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                result.textContent = "You Lose! Paper beats Rock";
                return -1;
            } else if (computerSelection === 'scissors') {
                result.textContent = "You Win! Rock beats Scissors";
                return 1;
            } else {
                result.textContent = "It's a Tie! Both picked Rock";
                return 0;
            }

        case 'paper':
            if (computerSelection === 'scissors') {
                result.textContent = "You Lose! Scissors beats Paper";
                return -1;
            } else if (computerSelection === 'rock') {
                result.textContent = "You Win! Paper beats Rock";
                return 1;
            } else {
                result.textContent = "It's a Tie! Both picked Paper";
                return 0;
            }

        case 'scissors':
            if (computerSelection === 'rock') {
                result.textContent = "You Lose! Rock beats Scissors";
                return -1;
            } else if (computerSelection === 'paper') {
                result.textContent = "You Win! Scissors beats Paper";
                return 1;
            } else {
                result.textContent = "It's a Tie! Both picked Scissors";
                return 0;
            }

        default:
            result.textContent = "Invalid pick";
            throw ('Invalid')
    }
}

// Function to check if the player or the computer reached 5 points
// If so its game over
const checkWin = () => {
    if (playerScore < 5 && computerScore < 5) {
        return;
    }

    if (playerScore === 5) {
        result.textContent = 'You won!';
    } else {
        result.textContent = 'You lost!';
    }
    gameOver = true;
}

/*
const game = () => {
    let counter = 0;

    let g = 0;

    while (g < 5) {
        const playerSelection = prompt('Rock, Paper, Scissors');
        const computerSelection = getComputerChoice();

        try {
            counter += playRound(playerSelection, computerSelection);
            g++;
        } catch (e) {
            console.log('Invalid Round')
        }
    }

    if (counter > 0) {
        console.log('Player wins!');
    } else if (counter < 0) {
        console.log('Player looses!');
    } else {
        console.log('Tie!');
    }
}
*/

// Event listener for our buttons
// We add listeners to the choice buttons using the id to play the round
const buttons = document.querySelectorAll('.pick');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(gameOver) return;
        const round = playRound(button.id, getComputerChoice());

        if (round > 0) {
            playerScore++;
        } else if (round < 0) {
            computerScore++;
        }
        updateScores();
        checkWin();
    })
})

// Add listener to the restart button so the user can restart a game
const restart = document.getElementById('restart');

restart.addEventListener('click', () => {
    restartGame();
});