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
    if(playerChoice === computerChoice) {
        return alert(`It's a tie! you both chose ${computerChoice}`)
    } else if(playerChoice == "rock" && computerChoice == "scissors"){
        return alert(`You win! ${playerChoice} beats ${computerChoice}`)
    }

    }

let playerChoiceCaseInsen = prompt("Rock, Paper Or scissors?")
let playerChoice = playerChoiceCaseInsen.toLowerCase();
let computerChoice = getComputerChoice()



console.log(playRound(playerChoice,computerChoice))
console.log(playerChoiceCaseInsen)
console.log(playerChoice)
console.log(computerChoice)