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

function restartTraining() {
    window.location.href = "memory.html";
}

function goHome() {
    window.location.href = "index.html";
}