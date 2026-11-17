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
const checkForWinner = document.querySelector (".h2"); 

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

    if (roundCount === 5) {
        gameWinner ();
}
}
//Final score after 5 rounds
function gameWinner() {
    const h2 = document.createElement("h2");

    if (humanScore >= 5) {
        h2.classList.add("human-won");
        h2.textContent = (`Game over, you win! Final score: ${humanScore} to ${computerScore}`);
    
    } else if (computerScore >= 5) {        
        h2.classList.add("computer-won");
        h2.textContent = (`Game over, you lose! Final score: ${computerScore} to ${humanScore}`);
    
    } else if (humanScore > computerScore) {
        h2.classList.add("human-won");
        h2.textContent = (`Congratulations, you win! Final score: ${humanScore} to ${computerScore}`);
}
    else if (computerScore > humanScore) {
        h2.classList.add("computer-won");
        h2.textContent = (`Sorry, you lost. Final score: ${computerScore} to ${humanScore}`);
    }
    roundResult.appendChild(h2);
}

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
