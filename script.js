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

function playRound(playerChoice, computerChoice) {
    const outcome = {
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
    let result = outcome[playerChoice][computerChoice]
    if(result == 'tie'){
        return alert(`It's a tie you both chose ${computerChoice}!`)
    } else if(result == `win`){
        return alert(`Player wins! ${playerChoice} beats ${computerChoice}`)
    } else if(result == `lose`){
        return alert(`Player loses ${computerChoice} beats ${playerChoice}`)
    }

   
    }

let playerChoiceCaseInsen = prompt("Rock, Paper Or scissors?")
let playerChoice = playerChoiceCaseInsen.toLowerCase();
let computerChoice = getComputerChoice()



console.log(playRound(playerChoice,computerChoice))
console.log(playerChoiceCaseInsen)
console.log(playerChoice)
console.log(computerChoice)