console.log("Hello World");

//global array for RPS choices
const choice = ["rock","paper","scissors"]

//function to play the game
//loop the round function 5 times 
//increase the points by 1 for the winner 
// make a final statement for the winner of the game
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const roundResult = document.querySelector(".result")


btnRock.addEventListener("click", () => {
playRound('rock',getComputerChoice());
});


btnPaper.addEventListener("click", () => {
playRound('paper', getComputerChoice());
});


btnScissors.addEventListener("click", () => {
playRound('scissors', getComputerChoice());
});


//function to run each round
function playRound(humanSelection, computerSelection){
    if (roundCount >= 5) {
        return;
    }    
    roundCount++;
    const result = roundWinner(humanSelection, computerSelection);  
    const p = document.createElement("p");
    
    if(result === "It's a tie!"){
        p.textContent = "It's a Tie!";
    }
    else if(result === "You win!") {
        p.textContent = `You Win! ${humanSelection} beats ${computerSelection}`;
    }
    else {
        p.textContent = `You Lose! ${computerSelection} beats ${humanSelection}`;
    }
        roundResult.appendChild(p);


console.log(`${humanScore} : ${computerScore}`);

if (roundCount === 5) {
    gameWinner ();
}
}
//Final score after 5 rounds
function gameWinner() {
    const h2 = document.createElement("h2");
    h2.classList.add = ("h2");

    if (humanScore >= 5 || computerScore >= 5) {
    h2.textContent = (`Game over, you win! ${humanScore} to ${computerScore}`);
    
    } else if (computerScore >= 5) {        
    h2.textContent = (`Game over, you lose! ${computerScore} to ${humanScore}`);
    
    } else if (humanScore > computerScore) {
    h2.textContent = (`Congratulations, you win!, ${humanScore} to ${computerScore}`);
}
    else if (computerScore < humanScore) {
    h2.textContent = (`Sorry, you lost. ${computerScore} to ${humanScore}`);
    }
    else if (computerScore == humanScore) {
    h2.textContent = (`It's a tie! ${computerScore} to ${humanScore}`);
    }
}

//make a function to get input from human
//allow users to enter choices through window prompt
//make inputs case insensitive, returning correctly-spelled inputs to lowercase
 /*
function getHumanChoice() {
    let userInput = prompt("Enter your choice (Rock, Paper or Scissors);");
    while (userInput == null) {
         userInput = prompt("Enter your choice (Rock, Paper or Scissors");
    } 
    userInput = userInput.toLowerCase();
    return userInput;
}
    */

//write the logic to get randomly genreated input from computer
function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

//write the function to determine round winner 
//validate the choices from human and computer inputs
//make a return statement to the user
function roundWinner(humanChoice, computerChoice) {
if (humanScore === 5) {
    return 'You win!'
} else if (computerScore === 5) {
    return 'You lose'
} else if (humanChoice === computerChoice) {
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



//RPS-UI
//Create three buttons, one for each selection.

