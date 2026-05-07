function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toLowerCase();
    const computerSelection = computerChoice.toLowerCase();
}


function getComputerChoice() {
    const randomNumber = Math.random();
  
    if (randomNumber < 1/3) {
      return "rock";
    } else if (randomNumber < 2/3) {
      return "paper";
    } else {
      return "scissors";
    }
}
  
  function getHumanChoice() {
    let choice =prompt("Rock, Paper, or Scissors?")
    return choice; 
  }

  function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const humanSelection = humanChoice.toLowerCase();
        const computerSelection = computerChoice.toLowerCase();

        if (humanSelection === computerSelection) {
            console.log("It's a tie!");
        } else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper")
        ) {
            console.log(`You win! ${humanSelection} beats ${computerSelection}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
            computerScore++;
        }
    }

    // Play 5 full rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round} of 5 ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("/n=== Game End ===");
    if (humanScore > computerScore) {
        console.log('You Win. Final Score: ${humanScore} - ${computerScore}');
    } else if (computerScore > humanScore) {
        console.log('Computer Wins. Final Score: ${computerScore} - ${humnanScore}');
    } else {
        console.log('Tie. Final score ${humanScore} - ${computerScore}');
    }
    }
     playGame();