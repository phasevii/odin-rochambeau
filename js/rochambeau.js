let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

const content = document.createElement("div");
content.setAttribute("id", "content");
document.body.appendChild(content);

const results = document.createElement("div");
results.setAttribute("id","results");
content.appendChild(results);

const gameWinner = document.createElement("div")
gameWinner.setAttribute("id", "game-winner");
results.appendChild(gameWinner);

const playerScoreText = document.createElement("div");
playerScoreText.setAttribute("id", "player-score");
results.appendChild(playerScoreText);

const computerScoreText = document.createElement("div");
computerScoreText.setAttribute("id", "computer-score");
results.appendChild(computerScoreText);

const btn = document.createElement("button");
btn.setAttribute('id','rock');
btn.textContent = "Rock";
content.appendChild(btn);

const btn2 = document.createElement("button");
btn2.setAttribute('id','paper');
btn2.textContent = "Paper";
content.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.setAttribute('id','scissors');
btn3.textContent = "Scissors";
content.appendChild(btn3);

document.querySelector("#content");
document.querySelector("#results");
document.querySelector("#game-winner");
document.querySelector("#player-score");
document.querySelector("#computer-score");
document.querySelector("#rock");
document.querySelector("#paper");
document.querySelector("#scissors");

btn.addEventListener("click", playRound);
btn2.addEventListener("click", playRound);
btn3.addEventListener("click", playRound);


//Main gameplay loop
function playRound(e) {
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();
    whoWon();
    displayNewScore();
}


//Chooses an outcome based on a randomly chosen number between 0 and 1
function getComputerChoice() {
    let computerChoice = Math.random();
    if(computerChoice <= .33) {
        return "rock";
    }
    else if(computerChoice > .33 && computerChoice <= .66) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

function whoWon() {
    if(playerChoice === computerChoice) {
        gameWinner.textContent = "It's a tie!"
    }
    else if (computerChoice === "rock" && playerChoice === "scissors" ||
              computerChoice === "paper" && playerChoice === "rock" ||
              computerChoice === "scissors" && playerChoice === "paper") {
                gameWinner.textContent = "Computer Wins!";
                computerScore++;
              }

    else {
        gameWinner.textContent = "You Win!";
        playerScore++;
    }
}

function displayNewScore() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    if (playerScore >= 5) {
        gameWinner.textContent = "You win this round!"
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore >= 5) {
        gameWinner.textContent = "You lose this round!"
        playerScore = 0;
        computerScore = 0;
    }
}


