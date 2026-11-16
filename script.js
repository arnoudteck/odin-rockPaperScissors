console.log("Hello World!");

//CREATE function getComputerChoice
function getComputerChoice() {
    //CREATE variable computerChoice
    //GET random number with Math.random
    let computerChoice = Math.random();

    //GET rock, paper or scissors based on random number; using conditionals
    if (computerChoice <= 0.33333) {
        computerChoice = "Rock";
    } else if (computerChoice <= 0.66666) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    //RETURN computerChoice
    return computerChoice;
}
//TEST code with console.log
console.log(getComputerChoice());

//CREATE function getHumanChoice
//CREATE variable humanChoice
//PROMPT user to insert Rock, Paper or Scissors
//CONVERT answer to lower case for convenience
//GET rock, paper or scissors based on prompt answer; conditional to check whether answer is valid
//RETURN humanChoice
//TEST code with console.log