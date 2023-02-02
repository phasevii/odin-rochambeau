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
        alert("You lose! Paper beats Rock!");
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        alert("You win! Rock beats Scissors!");
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        alert("Tie!");
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        alert("You lose! Scissors beat Paper!");
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        alert("You win! Paper beats Rock!");
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        alert("Tie!")
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        alert("You lose! Rock beats Scissors!");
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        alert("You win! Scissors beat Paper!")
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        alert("Tie!")
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = Window.prompt("Rock, Paper, Scissors, Shoot!")
        playRound(playerSelection,getComputerChoice())
    }
}