function getComputerChoice(a= 3) {
    let choice = Math.floor(Math.random() * a + 1)
    if(choice == 1) { 
        return "rock"
    } else if(choice == 2) {
        return "paper"
    } else if(choice == 3) {
        return "scissors"
    }
    }

function playRound() {
    let playerChoiceCaseInsen = prompt("Rock, Paper Or scissors?")
    let playerChoice = playerChoiceCaseInsen.toLowerCase();
    const outcomes = {
        rock: {
            scissors: 'win',
            rock: 'tie',
            paper: 'lose'
        },
        paper: {
            scissors: 'lose',
            rock: 'win',
            paper:'tie'
        },
        scissors: {
            scissors: 'tie',
            rock: 'lose',
            paper: 'win'
        }
    }
    let computerChoice = getComputerChoice()
    let result = outcomes[playerChoice][computerChoice]
    let message;
    if(result == 'tie'){
        message = `It's a tie you both chose ${computerChoice}!`
    } else if(result == `win`){
        message = `Player wins! ${playerChoice} beats ${computerChoice}`
    } else if(result == `lose`){
        message = `Player loses ${computerChoice} beats ${playerChoice}`
    }
    console.log(message)
    return { result, playerChoice, computerChoice}
   
    }

function game() {
    alert("Play rock paper scissors! Its going to be a best of five first to three wins!")
    let playerScore = 0 
    let computerScore = 0 
    for (let i = 0; i < 5; i++){
        let {result, playerChoice, computerChoice } = playRound()
        if(result == `win`){
            playerScore++
            console.log(`Current score: Player:${playerScore}\nComputer:${computerScore}`)
        } else if(result == 'lose'){
            computerScore++
            console.log(`Current score: Player:${playerScore}\nComputer:${computerScore}`)
        } else {
            i--
            console.log(`Current score: Player:${playerScore}\nComputer:${computerScore}`)
            continue
        }
        if(playerScore === 3 || computerScore === 3){
            break
        }
    }
    if(playerScore == 3) {
        alert(`You win the game! \nFinal score: You: ${playerScore} Computer: ${computerScore}`)
    } else if(computerScore == 3) {
        alert(`You lost the game \nFinal score: You: ${playerScore} Computer: ${computerScore}`)
    }
    
}

game()



