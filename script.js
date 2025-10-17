let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('userGuess');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const restartBtn = document.getElementById('restartBtn');

    let userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "❌ Please enter a number between 1 and 100.";
        return;
    }

    if (userGuess < secretNumber) {
        message.textContent = "📉 Too low! Try again.";
    } else if (userGuess > secretNumber) {
        message.textContent = "📈 Too high! Try again.";
    } else {
        message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
        restartBtn.style.display = "inline-block";
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('userGuess').value = "";
    document.getElementById('message').textContent = "";
    document.getElementById('attempts').textContent = "Attempts: 0";
    document.getElementById('restartBtn').style.display = "none";
}
