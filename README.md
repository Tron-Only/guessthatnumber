# 🎮 GUESS..THAT..NUMBER!

A fun JavaScript number-guessing game where you compete against AI hints. Will you outsmart the machine? 🔥❄️

![Gameplay Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDk5dWU0d3V5b2VjZ3B4M2R6Y2V6bmJjZ3JmN2R6eHl2dGZ6eWZ6ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMHxhOfscxPfIfm/giphy.gif)

## 🚀 How to Play

1. Live preview 👉 [Guess that Number](https://tron-only.github.io/guessthatnumber/)
2. The AI picks a random number (1-100).
3. Type your guess and press `Enter`.
4. Get feedback:
   - `YAY! AI will not replace you!` 🟢 (Correct!)
   - `🔥 HOT! Very close!` 🔴 (Within ±5)
   - `You're getting warmer...` 🟠 (Within ±10)
   - `❄️ COLD! Try again...` 🔵 (Far off)
5. Win in the fewest attempts!

![Win Screen](https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif)

## 💻 Code Highlights (JavaScript Learnings)

Key concepts used in this project:

```javascript
// 1. DOM Manipulation
const output = document.getElementById("output");

// 2. Event Listeners
document.addEventListener("keypress", (keypress) => {
  if (keypress.key === "Enter") checkGuess();
});

// 3. Random Number Generation
number = Math.floor(Math.random() * 100 + 1);

// 4. Conditional Logic & Absolute Difference
const difference = Math.abs(guessInput - number);
if (difference <= 5) {
  /* HOT! */
}

// 5. ClassList for Dynamic Styling
output.classList.add("shake");
```

## 🛠️ Features

- ✅ Real-time feedback (HOT/COLD)
- ✅ Attempt counter
- ✅ Mobile-friendly
- ✅ Animations (shake effect)
- ✅ Input validation

![Input Validation](https://media.giphy.com/media/Ln2dAW9oycjgmTpjX9/giphy.gif)

## 📚 Learning Resources

- [MDN DOM Guide](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

---

Made with ❤️ while learning JS.  
**Tip**: Open DevTools (`F12`) to see the secret number in console! 👀
