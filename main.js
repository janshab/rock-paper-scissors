'use strict';
let computerScore = 0;
let playerScore = 0;
let winColor= 0;
const gameResult = document.getElementById('gameResult');
const variants = ['rock', 'scissors', 'paper'];
const computerIcon = document.getElementById("computerIcon");
function play(userChoice) {
    const computerChoice = variants[Math.floor(Math.random() * variants.length)];
    computerIcon.style.backgroundImage = `url(./images/${computerChoice}.png)`;
    if (userChoice === computerChoice) {
        gameResult.innerText = 'Ничья';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        gameResult.innerText = 'Победа';
        playerScore++;
        winColor=1;
    } else {
        gameResult.innerText = 'Поражение';
        computerScore++;
        winColor=-1;
    }
    changeGameResultColor()
    changeButtonColor(userChoice);
    winColor=0;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('playerScore').textContent = playerScore;
    }
function changeButtonColor(userChoice) {
    const button = document.getElementById(userChoice);
    let borderColor;
    if (winColor === 1) {
        borderColor = 'green';
    } else if (winColor === -1) {
        borderColor = 'red';
    }
    button.style.border = `0.5vw solid ${borderColor}`;
    setTimeout(function() {
        button.style.border = '0.5vw solid black';
    }, 500);
}
function changeGameResultColor() {
    const gameResult = document.getElementById('gameResult');
    
    if (winColor === 1) {
        gameResult.style.color = '#0d9e00'; 
    } else if (winColor === -1) {
        gameResult.style.color = '#ff0000'; 
    }
    setTimeout(function() {
        gameResult.style.color = '#000000';
    }, 500); 
} 