# RPS-
rock paper scissors but in console.


reflection and explanation kinda? : 

Creating the computerChoice function was quite easy. I just created a function called getComputerChoice with a default arguement of 3 and then took that default using math.floor and math.random and created a simple random number generator between the numbers 1-3 and then assigned each number a choice of Rock, Paper, and scissors. 

I wanted the playround function to not require arguements so whoever sees this has to do nothing but play the game. to do that, I made the playerChoice variable inside the playRound function. 

Initally when creating this simple game specifally in the playRound function, I had an issue with having a bunch of if else statements to determine the outcome of each possible scenario. To overcome that I created a object called outcomes and had each choice Rock Paper or Scissors also be an object and would then give them properties of one another and describe the relationship between them so the object Rock would have a property of paper which would then have a string "Lose" and repeated for paper and scissors. 

The function would then go on to to a result variable which would take the playerChoice  and call the function getComputerChoice and then access what they return. Lets say the player types in rock and the computer chooses the random number that assigns it scissors, it would then go on to look in the object outcome and see that okay the player chooses rock and then look into the rock object and see that the computer chooses scissors and that would result in a win for the user and then finally the result variable would equal win. Everytime a round would end it would log in the console wether the player won lost or tied and then tell the user what they chose and what the computer chose. 

Now the game function. This I believe is where I struggled the most. Initally I had the right idea of creating variables for the scores of the player and computer and then running the playRound function in a for loop 5 times to simulate a best of 5. Each time someone would win the variable for their scores would increment by 1. The for loop would break as soon as either the computer or the use had reached a score of 3. The first issue I had was that when the game starts its all find but no matter what the result of the game was the scores would never update. I then went on to find out that in the playRound function since it took no arguements nothing was happening to the scores. I went on to realize at the end of the playRound function I needed to return the result, playerChoice and, computerChoice and then use those to update the scoring logic. Another issue I had was that when the game resulted in a tie it would still end in 5 games no matter if the user and computer tie 5 times. This was a simpler fix of just having another else statement that would then decrement the i variable from the for loop and continue the loop. 

Overall this project took me forever, I only have so much time during my lunch break at work to work on it but the final product was very satisfying and I believe I learned a lot. Theres still so much more to learn and understand and it feels good to have this be finsihed. 