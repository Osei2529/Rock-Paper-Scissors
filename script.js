//console.log("hello world!")

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

function getHumanChoice() {
    const choice = prompt("what's your move buddy? Rock, Paper, or Scissors?");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log(humanChoice);

    if (humanChoice === computerChoice) {
        console.log("it's a tie!");
    }
    else if (humanChoice ==="rock" &&  computerChoice === "paper") {
        console.log("Computer chose Paper, You lose!"); computerScore++;
    }
    else if (humanChoice ==="paper" &&  computerChoice === "rock") {
        console.log("You won!, Paper beat rock"); humanScore++;
    }
    else if (humanChoice ==="paper" &&  computerChoice === "scissors") {
        console.log("Computer chose scissors, You lose!"); computerScore++;
    }
    else if (humanChoice ==="scissors" &&  computerChoice === "paper") {
        console.log("You won!, scissors beat paper "); humanScore++;
    }
    else if (humanChoice ==="scissors" &&  computerChoice === "rock") {
        console.log("Computer chose rock, You lose!"); computerScore++;
    }
    else if (humanChoice ==="rock" &&  computerChoice === "scissors") {
        console.log("You won!, rock beat scissors "); humanScore++;
    }

    //console.log("Final score -  Your score is:", humanScore, "computer's score is:",computerScore);
}

playRound(getHumanChoice(),getComputerChoice());