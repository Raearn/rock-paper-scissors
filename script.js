let computerWins = 0
let playerWins = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "scissors";
    } else if (randomChoice === 3) {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose");

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        computerWins++
        return `The computer chose ${computerSelection}! ${playerSelection} can't beat ${computerSelection}. You lose!`;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        playerWins++
        return `The computer chose ${computerSelection}! ${playerSelection} beats ${computerSelection}. You win!`;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return `The computer chose ${computerSelection} and you chose ${playerSelection}! It's a tie!`;
    }

    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerWins++
        return `The computer chose ${computerSelection}! ${playerSelection} can't beat ${computerSelection}. You lose!`;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerWins++
        return `The computer chose ${computerSelection}! ${playerSelection} beats ${computerSelection}. You win!`;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return `The computer chose ${computerSelection} and you chose ${playerSelection}! It's a tie!`;
    }

    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerWins++
        return `The computer chose ${computerSelection}! ${playerSelection} can't beat ${computerSelection}. You lose!`;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerWins++
        return `The computer chose ${computerSelection}! ${playerSelection} beats ${computerSelection}. You win!`;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return `The computer chose ${computerSelection} and you chose ${playerSelection}! It's a tie!`;
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        alert(playRound());
    }

    if (playerWins > computerWins) {
        return `You won! Player: ${playerWins} | Computer: ${computerWins} `
    } else if (playerWins == computerWins) {
        return `It\'s a tie! Player: ${playerWins} | Computer: ${computerWins}`
    } else {
        return `You lost! Player: ${playerWins} | Computer: ${computerWins} `
    }
}

function tryAgain() {
    let input = prompt("Try again?");
    if (input.toLowerCase() == "yes") {
        computerWins = 0;
        playerWins = 0;
        return game();
    } else {
        return `Thanks for playing`;
    }
}

alert(game());
let playAgain = true;
while (playAgain) {
    let result = tryAgain();
    alert(result);
    if (result == "Thanks for playing") {
        playAgain = false;
    }
}