//Chooses an outcome based on a randomly chosen number between 1 and 2
function getComputerChoice() {
    let choice = Math.random();
    if(choice <= .33) {
        return "rock";
    }
    else if(choice > .33 && choice <= .66) {
        return "paper";
    }
    else {
        return "scissors"
    }
}
//Displays outcomes depending on the player's choice
function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You lose! Paper beats Rock!";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You win! Rock beats Scissors!";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        return "Tie!";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You lose! Scissors beat Paper!";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats Rock!";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        return "Tie!";
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You lose! Rock beats Scissors!";
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You win! Scissors beat Paper!";
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return "Tie!";
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = Window.prompt("Rock, Paper, Scissors, Shoot!");
        return playRound(playerSelection,getComputerChoice())
    }
}

console.log(game())