// Add these variables at the top
const tarotCard = document.getElementById("tarotCard");
const crystalBall = document.querySelector('.crystal-ball');

// Update the event listener
askButton.addEventListener("click", () => {
  if (questionInput.value.trim() === "") {
    fortuneResponse.textContent = "Please ask a question!";
  } else {
    // Add visual effects
    tarotCard.classList.add('visible-card');
    crystalBall.style.animation = 'glow 1s infinite alternate';
    fortuneResponse.textContent = getRandomFortune();
    
    // Remove animations after 2 seconds
    setTimeout(() => {
      tarotCard.classList.remove('visible-card');
      crystalBall.style.animation = '';
    }, 2000);
  }
});
// Preset responses
const fortunes = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

// Get DOM elements
const questionInput = document.getElementById("questionInput");
const askButton = document.getElementById("askButton");
const fortuneResponse = document.getElementById("fortuneResponse");

// Function to get a random fortune
function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

// Event listener for the button
askButton.addEventListener("click", () => {
  if (questionInput.value.trim() === "") {
    fortuneResponse.textContent = "Please ask a question!";
  } else {
    fortuneResponse.textContent = getRandomFortune();
  }
});