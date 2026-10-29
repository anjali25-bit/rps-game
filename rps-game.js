console.log("Hello World");


function getHumanChoice() {
    let userInput = prompt("Enter your choice (Rock, Paper or Scissors)");

let choice = userInput; 

if (choice === "Rock") {
    return "Rock";
} else if (choice === "Scissors") {
    return "Scissors";
}   else if (choice === "Paper") {
        return "Paper";
}
}
console.log(getHumanChoice())




function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 1:
        return("Rock");
    case 2:
        return("Paper");
    case 3:
        return("Scissors");
    }
}
console.log(getComputerChoice());

