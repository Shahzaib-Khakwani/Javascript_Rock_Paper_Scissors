alert('hello');
const computerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let UserChoice, ComputerChoice, result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    UserChoice = e.target.id;
    UserChoiceDisplay.innerHTML = UserChoice;
    generateComputerChoice();
    GetResult();
}));

function generateComputerChoice() {
    let randomNumber = Math.floor((Math.random() * possibleChoices.length) + 1);
    console.log(randomNumber);
    if (randomNumber === 1) {
        ComputerChoice = 'rock';
    }
    else if (randomNumber === 2) {
        ComputerChoice = 'paper';
    }
    else {
        ComputerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = ComputerChoice;
}

function GetResult() {
    if (ComputerChoice == UserChoice) {
        result = "its a draw";
    }
    else if ((ComputerChoice == 'rock' && UserChoice == 'scissors') || (ComputerChoice == 'scissors' && UserChoice == 'paper')) {
        result = "you win";
    }
    else if ((ComputerChoice == 'scissors' && UserChoice == 'rock') || (ComputerChoice == 'paper' && UserChoice == 'scissors')) {
        result = "computer lose";
    }

    resultDisplay.innerHTML = result;
}
