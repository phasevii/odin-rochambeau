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

console.log(getComputerChoice());