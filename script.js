function getComputerChoice(a= 3) {
    let choice = Math.floor(Math.random() * a + 1)
    if(choice == 1) { 
        return "Rock"
    } else if(choice == 2) {
        return "Paper"
    } else if(choice == 3) {
        return "Scissors"
    }
    }

function playRound(playerChoice, computerChoice) {
    if(playerChoice == "Rock" && computerChoice == "Paper") {
        return "Computer wins"
    }
}
let playerChioce = prompt("Rock, Paper Or scissors?")
let computerChoice = getComputerChoice()
console.log(playRound(playerChioce,computerChoice))
console.log(playerChioce)
console.log(computerChoice)