console.log("Hello World");

//global array for RPS choices
const choice = ["rock","paper","scissors"]

//function to play the game
//increase the points by 1 for the winner 
// make a final statement for the winner of the game
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

//Add DOM elements
const btnRock = document.querySelector(".rock");

const btnPaper = document.querySelector(".paper");

const btnScissors = document.querySelector(".scissors");

const roundResult = document.querySelector(".result")
const scoreDisplay = document.querySelector(".scoredisplay");


btnRock.addEventListener("click", () => {
playRound('rock',getComputerChoice());
});


btnPaper.addEventListener("click", () => {
playRound('paper', getComputerChoice());
});


btnScissors.addEventListener("click", () => {
playRound('scissors', getComputerChoice());
});

//Function to run each round
//Create "p" elements and append to roundResult
const p = document.createElement("p");
p.style.color = "white"; 
const endScore = document.createElement("div");
endScore.classList.add("endScore");

function playRound(humanSelection, computerSelection){
    if (roundCount >= 5) {
        return;
    }    
    roundCount++;
    const result = roundWinner(humanSelection, computerSelection);  
    
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

    endScore.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    endScore.style.color = "white"; 
    scoreDisplay.appendChild(endScore);
}
//Create a function to determine game winner
//Change console.logs to DOM methods
function gameWinner() {
    const h2 = document.createElement("h2");

    if (humanScore >= 5) {
        h2.classList.add("human-won");
        h2.textContent = (`Game over, you win! Final score: ${humanScore} to ${computerScore}`);
        h2.style.color = "white"; 

    } else if (computerScore >= 5) {        
        h2.classList.add("computer-won");
        h2.textContent = (`Game over, you lose! Final score: ${computerScore} to ${humanScore}`);
        h2.style.color = "white"; 

    } else if (humanScore > computerScore) {
        h2.classList.add("human-won");
        h2.textContent = (`Game over, you win! Final score: ${humanScore} to ${computerScore}`);
        h2.style.color = "white"; 
    }
    else if (computerScore > humanScore) {
        h2.classList.add("computer-won");
        h2.textContent = (`Game over, you lost. Final score: ${computerScore} to ${humanScore}`);
        h2.style.color = "white"; 
    }
    else if (computerScore == humanScore) {
        h2.classList.add("game-tie");
        h2.textContent = (`Game over! It's a tie. Final score: ${computerScore} to ${humanScore}`);
        h2.style.color = "white"; 
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
