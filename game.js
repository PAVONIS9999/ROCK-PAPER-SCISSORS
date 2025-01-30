const array = ["rock", "paper", "scissors"];
let humanScore = 0
let computerScore = 0


function getComputerChoice() {

    const RandomNumber = Math.floor(Math.random() * array.length);
    return array[RandomNumber];

}
function getHumanChoice() {

    let userChoice = prompt("please enter choice");

    if (array.includes(userChoice)) {
        return userChoice;
    }
    else if(userChoice == null) {
                console.log('Exited')
            }
            else {
                alert('Please enter a valid choice... eg rock, paper or scissors')
               getHumanChoice();
            };
}



function playGame() {
    let humanScore = 0
    let computerScore = 0

    console.log('Computer Score: ', computerScore)
    console.log('Human Score: ', humanScore)

    function playRound() {

        const humanChoice = getHumanChoice();

        if(humanChoice){
        const computerChoice = getComputerChoice();
        const convertedHumanChoice = humanChoice.toLowerCase();
        console.log('humanChoice: ', convertedHumanChoice)
        console.log('computerChoice: ', computerChoice)


        if (convertedHumanChoice === computerChoice) {
            console.log("its a tie");
            
        }

        switch (true) {
            case (convertedHumanChoice === "rock" && computerChoice === "scissors"):
                console.log("You win! rock beats scissors")
                ++humanScore
                break;
            case (convertedHumanChoice === "paper" && computerChoice === "rock"):
                console.log("You win! paper beats rock")
                ++humanScore
                break;
            case (convertedHumanChoice === "scissors" && computerChoice === "paper"):
                console.log("You win! scissors beats paper")
                ++humanScore
                break;
            case (computerChoice === "rock" && convertedHumanChoice === "scissors"):
                console.log("You lose! rock beats scissors")
                ++computerScore;
                break;
            case (computerChoice === "paper" && convertedHumanChoice === "rock"):
                console.log("You lose! paper beats rock")
                ++computerScore;
                break;
            case (computerChoice === "scissors" && convertedHumanChoice === "paper"):
                console.log("You lose! scissors beats paper")
                ++computerScore;
                break;
        }

        console.log('Computer Score: ', computerScore)
        console.log('Human Score: ', humanScore)

        }

    }

   

    playRound();


    playRound();


    playRound();


    playRound();


    playRound();

    

    if(computerScore > humanScore) {
        console.log('You are a loser');
    }
    else {
        console.log('You won, but you are still a loser')
    }





}


playGame()

