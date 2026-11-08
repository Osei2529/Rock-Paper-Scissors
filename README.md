# Rock Paper Scissors

A Rock Paper Scissors game played against the computer in the browser,
built as part of The Odin Project’s JavaScript Foundations course.
The first version ran in the console. This version adds a clickable UI.

## Live preview
https://osei2529.github.io/Rock-Paper-Scissors

## How to play
1. Click Rock, Paper or Scissors.
2. The computer picks randomly, and the result of the round appears
   on the page.
3. The running score updates after every round.
4. The first player to reach 5 points wins the game.

## What this demonstrates
- Creating and appending elements with the DOM (createElement,
  appendChild, textContent)
- Handling click events with addEventListener
- Refactoring console-based code into a UI: removing prompt() and
  the fixed five-round loop in favor of a score-based ending
- Managing game state with variables in a shared scope
- Using Math.random() for the computer’s choice
- Git branching: built the UI on a feature branch (rps-ui), merged
  it into main, and deleted the branch afterwards
- Deploying with GitHub Pages