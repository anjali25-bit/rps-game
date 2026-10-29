console.log("Hello World");

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

function getHumanChoice() {
    sign = prompt("Enter your choice");

console.log(getHumanChoice())
}
