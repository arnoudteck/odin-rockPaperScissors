console.log("ROCK PAPER SCISSORS");

//CREATE variable for round number
let roundNumber = 1;
//DISPLAY current round number
console.log("Round " + roundNumber);

//CREATE variables for arguments of the playRound function
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

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

//CREATE function getHumanChoice
function getHumanChoice() {
    //PROMPT user to insert Rock, Paper or Scissors
    //CREATE variable humanChoice 
    let humanChoice = prompt("Rock, Paper or Scissors?", "");

    //CONVERT answer to lower case for convenience
    humanChoice = humanChoice.toLowerCase();

    //GET rock, paper or scissors based on prompt answer; conditional to check whether answer is valid
    if (humanChoice === "rock" | humanChoice === "paper" | humanChoice === "scissors" | humanChoice === "gun") {
        humanChoice = humanChoice;
    } else {
        humanChoice = "!invalid answer!";
    }

    //RETURN humanChoice
    return humanChoice;
}

//CREATE variables to keep score
let computerScore = 0;
let humanScore = 0;

//CREATE function playGame
function playGame() {

//CREATE function playRound with parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {

    //CREATE conditionals for the rules of the game
    //OUTPUT winner or loser statements in the console
    //INCREMENT winner's score

    //if user chooses rock
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Rock against Rock. It's a tie.");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("Paper beats Rock. You lose this round!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("Rock beats Scissors. You win this round!");

    //if user chooses paper
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("Paper beats Rock. You win this round!");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Paper against Paper. It's a tie.");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("Scissors beat Paper. You lose this round!");

    //if user chooses scissors
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("Rock beats Scissors. You lose this round!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("Scissors beat Paper. You win this round!");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Scissors against Scissors. It's a tie.");
    
    //if user chooses invalid answer
    } else if (humanChoice === "!invalid answer!") {
        computerScore++;
        console.log("Invalid answer. You lose this round!");
    }
}



    //ADJUST round number
    roundNumber++;

    //DISPLAY choices of both players
    console.log("computer: " + computerChoice + " | user: " + humanChoice);

    //PLAY one round
    playRound(humanChoice, computerChoice);

    //DISPLAY scores of both players
    console.log("computer: " + computerScore + " | user: " + humanScore);

    //DISPLAY an empty line for readability
    console.log(" ");
}

//PROGRAM function shotComputer to log user using gun
function shotComputer() {
    console.log("GAME OVER. Dude... you shot the computer.");
}
//PROGRAM function anotherRound to get data for each new round and start another round
function anotherRound() {
    playGame();

        //DISPLAY current round number
        console.log("Round " + roundNumber);
        //GET data for new round
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
}

function playFullGame() {
    //PROGRAM condition to play one round
    if (humanChoice === "gun") {
        shotComputer();
    } else {
        anotherRound();

        //PROGRAM condition to play one more round
        if (humanChoice === "gun") {
            shotComputer();
        } else {
            anotherRound();


            //PROGRAM condition to play one more round
            if (humanChoice === "gun") {
            shotComputer();
            } else {
                anotherRound();

                //PROGRAM condition to play one more round
                if (humanChoice === "gun") {
                shotComputer();
                } else {
                    anotherRound();

                    //PROGRAM condition to play one more round
                    if (humanChoice === "gun") {
                    shotComputer();
                    } else {
                        playGame();

                        //DISPLAY who won the game by programming console.log into a conditional
                        if (computerScore > humanScore) {
                            console.log("GAME OVER. The machine has won. Reload this page for a rematch.");
                        } else if (computerScore < humanScore) {
                            console.log("GAME OVER. You won! The machines will come for you now...");
                        } else {
                            console.log("GAME OVER. It's a tie. Reload this page for a rematch.")
}


                    }
                }  
            }
        }
    }
}

playFullGame();