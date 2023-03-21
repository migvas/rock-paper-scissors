const options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    return options[choice]
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                console.log("You Lose! Paper beats Rock");
                return -1;
            } else if (computerSelection === 'scissors') {
                console.log("You Win! Rock beats Scissors");
                return 1;
            } else {
                console.log("It's a Tie! Both picked Rock");
                return 0;
            }

        case 'paper':
            if (computerSelection === 'scissors') {
                console.log("You Lose! Scissors beats Paper");
                return -1;
            } else if (computerSelection === 'rock') {
                console.log("You Win! Paper beats Rock");
                return 1;
            } else {
                console.log("It's a Tie! Both picked Paper");
                return 0;
            }

        case 'scissors':
            if (computerSelection === 'rock') {
                console.log("You Lose! Rock beats Scissors");
                return -1;
            } else if (computerSelection === 'paper') {
                console.log("You Win! Scissors beats Paper");
                return 1;
            } else {
                console.log("It's a Tie! Both picked Scissors");
                return 0;
            }

        default:
            console.log("Invalid pick");
            throw ('Invalid')
    }
}


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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    })
})