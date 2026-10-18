console.log("hello world!")

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
    let choice = prompt("what's your move buddy? Rock, Paper, or Scissors?");
    return choice;
}