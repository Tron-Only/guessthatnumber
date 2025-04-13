const output = document.getElementById("output");
const attemptsText = document.getElementById("attempts");
let number;
let attempts;
document.addEventListener("DOMContentLoaded", resetGame);
document.addEventListener("keypress", (keypress) => {
  if (keypress.key === "Enter") {
    checkGuess();
  }
});

function checkGuess() {
  let guessInput = document.getElementById("guessInput").value;
  if (isNaN(guessInput) || guessInput < 1 || guessInput > 100) {
    output.textContent = "❌ Enter a number between 1-100!";
    return;
  }

  guessInput = Number(guessInput);
  console.log(`Users guess is ${guessInput}`);
  output.classList.remove("greenText", "redText", "blueText", "tomatoText");
  const difference = Math.abs(guessInput - number);
  if (guessInput === number) {
    output.textContent = "YAY! AI will not replace you!";
    output.classList.add("greenText");
    guessInput.value = "";
    output.classList.add("shake");
    setTimeout(() => output.classList.remove("shake"), 500);
  } else if (difference <= 5) {
    output.textContent = "🔥 HOT! Very close!";
    output.classList.add("redText");
    output.classList.add("shake");
    setTimeout(() => output.classList.remove("shake"), 500);
  } else if (difference <= 10) {
    output.textContent = "You're getting warmer...";
    output.classList.add("tomatoText");
    output.classList.add("shake");
    setTimeout(() => output.classList.remove("shake"), 500);
  } else {
    output.textContent = "❄️ COLD! Try again...";
    output.classList.add("blueText");
    output.classList.add("shake");
    setTimeout(() => output.classList.remove("shake"), 500);
  }
  attempts++;
  attemptsText.textContent = attempts;
}

function resetGame() {
  number = Math.floor(Math.random() * 100 + 1);
  attempts = 0;
  attemptsText.textContent = attempts;
  console.log(`The number is ${number}`);
  output.textContent = "I'm thinking of a number from 1 to 100";
  output.classList.remove("greenText", "redText");
}
