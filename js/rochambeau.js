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
    if(playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats Rock!");
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats Scissors!");
    }
    else if(playerSelection === "rock" && computerSelection === "rock") {
        alert("Tie!");
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors beat Paper!");
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper beats Rock!");
    }
    else if(playerSelection === "paper" && computerSelection === "paper") {
        alert("Tie!")
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock beats Scissors!");
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors beat Paper!")
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors") {
        alert("Tie!")
    }
}

function game() {

}