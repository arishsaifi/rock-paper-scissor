let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let compScore = parseInt(localStorage.getItem('compScore')) || 0;

let popup = document.getElementById("popup")

const playerSCoreElement = document.getElementById('player-score');
const compScoreElement = document.getElementById('computer-score');
playerSCoreElement.textContent = playerScore;
compScoreElement.textContent = compScore;

var won = document.getElementById('won');
var loss = document.getElementById('loss');
var tie = document.getElementById('tie')
// var footDiv = document.getElementById('foot');
// wonDiv.innerHTML = footDiv.innerHTML;

function chooseOption(option) {
    const options = document.getElementsByClassName('option');
    const compChoice = funcCompChoice();
    const result = Winner(option, compChoice);

    if (result === 'player') {
        playerScore++;
        document.getElementById("result-message").innerHTML = "<h1> You won this round ☺</h1>"
    } else if(result === 'computer') {
        compScore++;
        document.getElementById("result-message").innerHTML = "<h1> Computer won this round😫</h1>"
    }else{
        document.getElementById("result-message").innerHTML = "<h1> Tie 🤜🤛</h1>"
    }

    playerSCoreElement.textContent = playerScore;
    compScoreElement.textContent = compScore;

    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('compScore', compScore);

    if (playerScore === 15) {
        document.getElementById("foot").innerHTML = won.innerHTML
    }
    else if (compScore === 15) {
        document.getElementById("foot").innerHTML = loss.innerHTML
    }
    else if(playerScore === 15 && compScore === 15){
        document.getElementById("tie").innerHTML = tie.innerHTML;
    }
}

function funcCompChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const a = Math.floor(Math.random() * 3);
    return options[a];
}
function Winner(playerOption, compChoice) {
    if (
        (playerOption === 'rock' && compChoice === 'scissors') ||
        (playerOption === 'paper' && compChoice === 'rock') ||
        (playerOption === 'scissors' && compChoice === 'paper')
    ) {
        return 'player';
    } else if (playerOption === compChoice) {
        return 'tie';
    } else {
        return 'computer';
    }
}

function playAgain() {
    localStorage.removeItem('playerScore');
    localStorage.removeItem('compScore');
    playerScore = 0;
    compScore = 0;
    playerSCoreElement.textContent = playerScore;
    compScoreElement.textContent = compScore;
    // window.location.reload(true);
}

function openPopup() {
    popup.classList.add("open-popup")
}
function closePopup() {
    popup.classList.remove("open-popup")
}
// ================================================//
