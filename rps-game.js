console.log("Hello World");

const choice = ["rock","paper","scissors"]

function playGame () {
    playRound();
}

    //input from human
function getHumanChoice() {
    let userInput = prompt("Enter your choice (Rock, Paper or Scissors);");
    while (userInput == null) {
         userInput = prompt("Enter your choice (Rock, Paper or Scissors");
    } 
    userInput = userInput.toLowerCase();
    return userInput;
}

//input from computer
function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

function roundWinner(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    return "It's a tie!";
} 

else if (
(humanChoice === "rock" && computerChoice === "scissors") || 
(humanChoice === "scissors" && computerChoice === "paper") || 
(humanChoice === "paper" && computerChoice === "rock")
) {
    return "You win!"; 
} else {
    return "You lose!";
}
}

    //play a single round
function playRound(humanSelection, computerSelection) {
    const result = roundWinner(humanSelection, computerSelection);
    if(result === "It's a tie!"){
        return "It's a Tie!"
    }
    else if(result === "You win!") {
        return `You Win! ${humanSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${humanSelection}`
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("You chose:", humanSelection);
console.log("Computer chose:", computerSelection);
console.log(playRound(humanSelection,computerSelection));
