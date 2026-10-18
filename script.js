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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice,computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        
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
    }
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection);
        playRound(humanSelection, computerSelection);
    }
    console.log("Final score -  Your score is:", humanScore, "computer's score is:",computerScore);
}
playGame();