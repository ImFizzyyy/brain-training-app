let userAnswers = JSON.parse(
    localStorage.getItem("userAnswers")
)

let correctAnswers = JSON.parse(
    localStorage.getItem("correctAnswers")
)

let score = 0;

for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
        score++;
    }
}

document.getElementById("score").innerHTML =
    "Your score: " + score + " out of " + correctAnswers.length;

localStorage.removeItem("userAnswers");
localStorage.removeItem("correctAnswers");

let scoreHistory = JSON.parse(
    localStorage.getItem("scoreHistory")
) || [];

scoreHistory.push({
    score: score,
    total: correctAnswers.length,
    date: new Date().toLocaleString()
});

if (scoreHistory.length > 100) {
    scoreHistory.shift();
}

localStorage.setItem(
    "scoreHistory",
    JSON.stringify(scoreHistory)
);

function nextPage() {
    window.location.href = "progress.html";
}