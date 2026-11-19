console.log("Hello World");

//global array for RPS choices
const choice = ["rock","paper","scissors"]

//Inital scores of players
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

//Section with DOM elements and methods
const btnRock = document.querySelector(".rock");

const btnPaper = document.querySelector(".paper");

const btnScissors = document.querySelector(".scissors");

const scoreDisplay = document.querySelector(".scoredisplay");

const roundResult = document.querySelector(".result");

const gameStart = document.querySelector(".starttext");

//Specific DOM method to create starting text
const startText = document.createElement("p");
startText.style.color = "white";
startText.textContent = "Play the classic game RPS! Click any weapon to begin";
gameStart.appendChild(startText);

const startText2 = document.createElement("p");
startText2.style.color = "white";
startText2.textContent = "Play 5 rounds";
gameStart.appendChild(startText2);


btnRock.addEventListener("click", () => {
playRound('rock',getComputerChoice());
});


btnPaper.addEventListener("click", () => {
playRound('paper', getComputerChoice());
});


btnScissors.addEventListener("click", () => {
playRound('scissors', getComputerChoice());
});

//Create paragraph elements for text and append to roundResult
const p = document.createElement("p");
p.style.color = "white"; 

const endScore = document.createElement("div");
endScore.classList.add("endScore");

//Function to run each round
//endScore displays scoreboard to user
function playRound(humanSelection, computerSelection){
    if (roundCount === 0) {
        startText.remove();
        startText2.remove();
    }
    if (roundCount >= 5) {
        return;
    }    
    roundCount++;
    const result = roundWinner(humanSelection, computerSelection);  
    
    if(result === "Tie!"){
        p.textContent = "It's a Tie!";
    }
    else if(result === "Win!") {
        p.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
    }
    else {
        p.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
    }
        roundResult.appendChild(p);

    if (roundCount === 5) {
        gameWinner ();
}
    endScore.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    endScore.style.color = "white"; 
    scoreDisplay.appendChild(endScore);
}
//Function to determine game winner
//Uses DOM methods to display game winner
function gameWinner() {
    const h2 = document.createElement("h2");

    if (humanScore >= 5) {
        h2.classList.add("human-won");
        h2.textContent = (`Game over, you win! Final score: ${humanScore} - ${computerScore}`);
        h2.style.color = "white"; 

    } else if (computerScore >= 5) {        
        h2.classList.add("computer-won");
        h2.textContent = (`Game over, you lost. Final score: ${computerScore} - ${humanScore}`);
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
        h2.textContent = (`Game over! It's a tie! Final score: ${computerScore} to ${humanScore}`);
        h2.style.color = "white"; 
    }
    
    roundResult.appendChild(h2);

}

//Logic to get randomly generated input from computer
function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

//Function that determines round winner 
//validate the choices from human and computer inputs
//make a return statement to use in the playRound function
function roundWinner(humanChoice, computerChoice) {
if (humanScore === 5) {
    return 'Win!'
} else if (computerScore === 5) {
    return 'Lose'
} else if (humanChoice === computerChoice) {
    return "Tie!";
} 

else if (
(humanChoice === "rock" && computerChoice === "scissors") || 
(humanChoice === "scissors" && computerChoice === "paper") || 
(humanChoice === "paper" && computerChoice === "rock")
) {
    humanScore = humanScore+1; 
    return "Win!";
} else {
    computerScore = computerScore+1;
    return "Lose!";
}
}
