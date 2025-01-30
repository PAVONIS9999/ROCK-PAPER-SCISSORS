const array = ["rock", "paper", "scissors"];
let humanScore = 0
let computerScore = 0

     
function getComputerChoice() {
    
     const RandomNumber = Math.floor(Math.random() * array.length);
     return array[RandomNumber];

}
function getHumanChoice() {

    let userChoice = prompt("please enter choice");

     if(array.includes(userChoice)) {
        return userChoice;
     } 
     else {
        getComputerChoice()
     };
}

function playRound(humanChoice, computerChoice) {
    const convertedHumanChoice = humanChoice.toLowerCase();
    console.log('convertedHumanChoice', convertedHumanChoice)
    console.log('computerChoice', computerChoice)


    if (convertedHumanChoice === computerChoice) {
        return "its a tie";
    }
     
        switch(true) {
            case (convertedHumanChoice === "rock" && computerChoice === "scissors"):
            console.log("you win! rock beats scissors")
            console.log("humanscore" + "" + ++humanScore );
            break;
            case (convertedHumanChoice === "paper" && computerChoice === "rock"):
            console.log("you win! paper beats rock")
            console.log("humanscore" + "" + ++humanScore);
            break;
            case (convertedHumanChoice === "scissors" && computerChoice === "paper" ):
            console.log("you win! scissors beats paper")
            console.log( "humanscore" + "" + ++humanScore);
            break;
            case (computerChoice === "rock" && convertedHumanChoice === "scissors"):
            console.log("you lose! rock beats scissors")
            console.log("computerscore" + "" + ++computerScore);
            break;
            case (computerChoice === "paper" && convertedHumanChoice === "rock"):
            console.log("you lose! paper beats rock")
            console.log("computerscore" + "" + ++computerScore);
            break;
            case (computerChoice === "scissors" && convertedHumanChoice === "paper"):
            console.log("you lose! scissors beats paper")
            console.log("computerscore" + "" + ++computerScore);
            break;
     }

    
    }

    
    function playGame() {
        let humanScore = 0
        let computerScore = 0

    
       
        
        console.log(playRound(humanSelection, ComputerSelection));
        getHumanChoice();
        getComputerChoice();
    
        console.log(playRound(humanSelection, ComputerSelection));
        getHumanChoice();
        getComputerChoice();
    
        console.log(playRound(humanSelection, ComputerSelection));
        getHumanChoice();
        getComputerChoice();
    
        console.log(playRound(humanSelection, ComputerSelection));
        getHumanChoice();
        getComputerChoice();
    
        console.log(playRound(humanSelection, ComputerSelection));

       
    
   
        
        }


        const humanSelection = getHumanChoice();
        const ComputerSelection = getComputerChoice();
    


     console.log(playGame())

