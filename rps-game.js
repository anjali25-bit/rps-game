console.log("Hello World");

//global array for RPS choices
const choice = ["rock","paper","scissors"]

//function to play the game
//loop the round function 5 times 
//increase the points by 1 for the winner 
// make a final statement for the winner of the game
function playGame () {

//declare the scoring system
let humanScore = 0;
let computerScore = 0;
let round = 1;
console.log(humanScore);
console.log(computerScore);

for (let i=1;i<6;i++) {

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//function to run each round
function playRound(humanSelection, computerSelection){
    const result = roundWinner(humanSelection, computerSelection);
    if(result === "It's a tie!"){
        return "It's a Tie!"
    }
    else if(result === "You win!") {
        humanScore += 1;
        return `You Win! ${humanSelection} beats ${computerSelection}`;
    }
    else {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${humanSelection}`;
    }
}

console.log ("Round:", i);
console.log("You chose:", humanSelection);
console.log("Computer chose:", computerSelection);
console.log(playRound(humanSelection,computerSelection));
console.log(humanScore, computerScore);
}
if (i = 5) {
    if (humanScore > computerScore) {
        console.log(`Congratulations, you win!, ${humanScore} to ${computerScore}`);
}
    else if (computerScore < humanScore) {
        console.log (`Sorry, you lost. ${computerScore} to ${humanScore}`);
    }
    else if (computerScore == humanScore) {
        console.log (`It's a tie! ${computerScore} to ${humanScore}`);
    }
}
}
playGame ();

//make a function to get input from human
//allow users to enter choices through window prompt
//make inputs case insensitive, returning correctly-spelled inputs to lowercase
 
function getHumanChoice() {
    let userInput = prompt("Enter your choice (Rock, Paper or Scissors);");
    while (userInput == null) {
         userInput = prompt("Enter your choice (Rock, Paper or Scissors");
    } 
    userInput = userInput.toLowerCase();
    return userInput;
}

//write the logic to get randomly genreated input from computer
function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

//write the function to determine round winner 
//validate the choices from human and computer inputs
//make a return statement to the user
function roundWinner(humanChoice, computerChoice) {
let humanScore = 0;
let computerScore = 0;
if (humanChoice === computerChoice) {
    return "It's a tie!";
} 

else if (
(humanChoice === "rock" && computerChoice === "scissors") || 
(humanChoice === "scissors" && computerChoice === "paper") || 
(humanChoice === "paper" && computerChoice === "rock")
) {
    humanScore = humanScore+1; 
    return "You win!";
} else {
    computerScore = computerScore+1;
    return "You lose!";
}
}

