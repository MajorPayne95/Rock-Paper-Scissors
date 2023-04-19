// Sets variable to track player score
let playerScore = 0
// Sets variable to track cpu score
let computerScore = 0
// sets variable that selects all input html elements with type input
const buttons = document.querySelectorAll('input')
// Function that determines the cpu choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
// Function that disables all buttons once pressed
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
// Function that compares both the player input and cpu input to determine a winner
function playRound(playerSelection) {
    let computerSelection = computerPlay() // Variable set to the cpu play function and pulls in the result
    let result = "" // Variable used to track results of each round

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result // Updates the html div results text to the current rounds results
    return
}
// Function that determines the users input based on what button they clicked.
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})