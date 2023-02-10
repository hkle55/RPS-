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
        const outcomes = {
            rock: {scissors: 'win', rock: 'tie', paper: 'lose'},
            paper: {rock: 'win', paper: 'tie', scissors: 'lose'},
            scissors: {paper: 'win', scissors: 'tie', rock: 'lose'}
        };
        const result = outcomes[playerChoice][computerChoice];
        if (result === 'tie') {
            return alert(`It's a tie! You both chose ${computerChoice}.`);
        } else if (result === 'win') {
            return alert(`You win! ${playerChoice} beats ${computerChoice}.`);
        } else if (result === 'lose') {
            return alert(`You lose! ${computerChoice} beats ${playerChoice}.`);
        }
    }
    

let playerChoiceCaseInsen = prompt("Rock, Paper Or scissors?")
let playerChoice = playerChoiceCaseInsen.toLowerCase();
let computerChoice = getComputerChoice()



console.log(playRound(playerChoice,computerChoice))
console.log(playerChoiceCaseInsen)
console.log(playerChoice)
console.log(computerChoice)