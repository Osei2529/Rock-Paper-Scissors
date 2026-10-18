console.log("hello world!")

function getComputerChoice() {
    let number = Math.random();
    console.log (number);

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
