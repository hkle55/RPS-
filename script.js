function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max + 1)
    if(choice == 1) { 
        return "Rock"
    } else if(choice == 2) {
        return "Paper"
    } else if(choice == 3) {
        return "Scissors"
    }
    }


console.log(getComputerChoice(3))