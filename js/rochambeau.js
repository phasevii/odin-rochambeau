//Chooses an outcome based on a randomly chosen number between 1 and 2
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 2) + 1;
    if(choice = 0) {
        return "rock";
    }
    else if(choice = 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}