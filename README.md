# Rock Paper Scissors

A console-based Rock Paper Scissors game, played against the computer,
built as part of The Odin Project's JavaScript Foundations course.
This was the first project built entirely from scratch in JavaScript,
with no starter code or guided HTML/CSS structure.

## What this demonstrates
- Writing and calling functions with parameters and return values
- Using Math.random() to generate random outcomes
- Getting user input with prompt() and handling string comparison
  (case-insensitivity with toLowerCase())
- Conditional logic (if/else if) to compare choices and determine
  a winner
- Using a for loop to repeat game rounds
- Variable scope: nesting functions and variables inside playGame
  so they're only accessible where needed
- Git and GitHub workflow: incremental commits after each function

## How to play
1. Clone the repo and open index.html in a browser
2. Open the browser console (F12 → Console tab)
3. The game runs automatically, prompting for your move each round
4. After 5 rounds, the final score is logged to the console

## Project structure
- getComputerChoice() — randomly returns "rock", "paper", or "scissors"
- getHumanChoice() — prompts the player for their move
- playGame() — runs 5 rounds, keeps score, and declares a winner
  - playRound() — nested inside playGame, compares both choices
    and updates the score for a single round