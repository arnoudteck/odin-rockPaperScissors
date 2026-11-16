console.log("Hello World!");

//CREATE function getComputerChoice
function getComputerChoice() {
    //CREATE variable computerChoice
    //GET random number with Math.random
    let computerChoice = Math.random();

    //GET rock, paper or scissors based on random number; using conditionals
    if (computerChoice <= 0.33333) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.66666) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    //RETURN computerChoice
    return computerChoice;
}
//TEST code with console.log
console.log(getComputerChoice());

//CREATE function getHumanChoice
function getHumanChoice() {
    //PROMPT user to insert Rock, Paper or Scissors
    //CREATE variable humanChoice 
    let humanChoice =prompt("Rock, Paper or Scissors?", "");

    //CONVERT answer to lower case for convenience
    humanChoice = humanChoice.toLowerCase();

    //GET rock, paper or scissors based on prompt answer; conditional to check whether answer is valid
    if (humanChoice === "rock" | humanChoice === "paper" | humanChoice === "scissors") {
        humanChoice = humanChoice;
    } else {
        humanChoice = "Invalid answer!";
    }

    //RETURN humanChoice
    return humanChoice;
}
//TEST code with console.log
console.log(getHumanChoice());

//CREATE variables to keep score
let computerScore = 0;
let humanScore = 0;

//CREATE function playRound with parameters humanChoice and computerChoice
//CREATE conditionals for the rules of the game
//OUTPUT winner or loser statements in the console
//INCREMENT winner's score