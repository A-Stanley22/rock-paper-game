 const options = document.querySelectorAll(".option");
 const playerScoreElem = document.querySelector(".player-score");
 const computerScoreElem = document.querySelector(".computer-score");
 const resultElem = document.querySelector("#result");
 const gameOverElem = document.querySelector("#game-over");
 const playAgainBtn = document.querySelector('#play-again');

 var weapons = ['rock', 'paper', 'scissors'];
 var playerScore = 0;
 var computerScore = 0;

// game logic function
function gameLogic(playerWeapon, computerWeapon) {
    if (playerWeapon === computerWeapon) {
        resultElem.innerHTML = "it's a Tie!";
    } else if ((playerWeapon === 'rock' && computerWeapon === 'scissors') ||
    (playerWeapon === 'paper' && computerWeapon === 'rock') ||
    (playerWeapon === 'scissors' && computerWeapon === 'paper')) {
        playerWins();
    } else {
        computerWins();
    }
    if ((playerScore === 5) || (computerScore === 5)) {
        winner();
    }
}

// player choice function
function playerChoice() {
    const playerWeapon = this.id;
    console.log(playerWeapon);
    const computerWeapon = computerChoice();
    gameOverElem.innerHTML = `Computer choose: ${computerWeapon}`;
    gameLogic(playerWeapon, computerWeapon);
}

// computer choice function
function computerChoice() {
    const weaponIndex = Math.floor(Math.random() * weapons.length);
    return weapons[weaponIndex];
}

// player wins function
function playerWins() {
    resultElem.innerHTML = 'You win!';
    playerScore++;
    playerScoreElem.innerHTML = playerScore;
}

// computer wins function
function computerWins() {
    resultElem.innerHTML = 'Computer wins!';
    computerScore++;
    computerScoreElem.innerHTML = computerScore;
}

// winner function
function winner() {
    if (playerScore === 5) {
        resultElem.textContent = 'You win the game!';
        resultElem.style.color = 'green';
        gameOverElem.innerHTML = 'Game Over';
        disableOptions();
    } else if (computerScore === 5) {
        resultElem.textContent = 'You lose the game!';
        resultElem.style.color = 'red';
        gameOverElem.innerHTML = 'Game Over';
        disableOptions();
    }
}

// reset game function
function gameReset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElem.innerHTML = '0';
    computerScoreElem.innerHTML = '0';
    resultElem.innerHTML = 'Choose your weapon!';
    resultElem.style.color = '#660033';
    gameOverElem.innerHTML = '';
    enableOptions();
}

function disableOptions() {
    options.forEach((option) => {
      option.style.pointerEvents = 'none';
    });
} 

function enableOptions() {
    options.forEach((option) => {
      option.style.pointerEvents = 'auto';
    });
}

// Event listeners
options.forEach((option) => option.addEventListener('click', playerChoice));
playAgainBtn.addEventListener('click', gameReset);
