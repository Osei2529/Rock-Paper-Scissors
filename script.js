function getComputerChoice() {
    let number = Math.random();

    if (number < 1/3 ) {
        return "rock";
    }

    else if (number < 2/3 ) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
function playRound(playerSelection) {
     if (humanScore === 5 || computerScore === 5) return;
    playerSelection = playerSelection.toLowerCase();

    const computerSelection = getComputerChoice();
    let message;
   
    if (playerSelection === computerSelection) {
        message = `Tie! You both chose ${playerSelection}`;
    }
    else if (
        (playerSelection === "rock" &&  computerSelection === "paper") ||
        (playerSelection === "scissors" &&  computerSelection === "rock") ||
        (playerSelection === "paper" &&  computerSelection === "scissors")) {
        message = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    else {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
        humanScore++;
    }

    const para = document.createElement("p");
    para.textContent = message;
    results.appendChild(para);

    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        winner.textContent = "You won this game! 🎉🎉";
    }
    else if (computerScore === 5) {
        winner.textContent = "The computer won this game";
    }
}

const div = document.querySelector("#buttons");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");


const rockbtn = document.createElement("button");
const paperbtn = document.createElement("button");
const scissorsbtn = document.createElement("button");

rockbtn.textContent = "rock";
paperbtn.textContent = "paper";
scissorsbtn.textContent = "scissors";

div.appendChild(rockbtn);
div.appendChild(paperbtn);
div.appendChild(scissorsbtn);

rockbtn.addEventListener("click", () => playRound("rock"));
paperbtn.addEventListener("click", () => playRound("paper"));
scissorsbtn.addEventListener("click", () => playRound("scissors"));