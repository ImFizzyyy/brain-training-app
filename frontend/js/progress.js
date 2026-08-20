let scoreHistory = JSON.parse(
    localStorage.getItem("scoreHistory")
) || [];

let lastFiveScores = scoreHistory.slice(-5);

let labels = lastFiveScores.map(function (attempt, index) {
    let date = new Date(attempt.date);

    let dayLabel = date.toLocaleDateString([], {
        month: "short",
        day: "numeric"
    });

    let timeLabel = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    return [dayLabel, timeLabel];
});

let scores = lastFiveScores.map(function (attempt) {
    return attempt.score;
})

let totals = lastFiveScores.map(function (attempt) {
    return attempt.total;
})

if (lastFiveScores.length > 0) {

    let chartElement = document.getElementById("scoreChart");

    new Chart(chartElement, {
        type: "line",

        data: {
            labels: labels,
            datasets: [{
                label: "Memory Score",
                data: scores,
                tension: 0.25
            }]
        },

        options: {
            responsive: true,

            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: Math.max(...totals)
                }
            }
        }
    });
}

let historyDiv = document.getElementById("scoreHistory");

let startIndex = Math.max(0, scoreHistory.length - 5, 0);

if (scoreHistory.length === 0) {

    historyDiv.innerHTML = "<p>No scores yet.</p>";

} else {

    for (let i = scoreHistory.length - 1; i >= startIndex; i--) {

        let attempt = scoreHistory[i];

        let p = document.createElement("p");

        p.innerHTML =
            attempt.date +
            " - " +
            "Score: " +
            attempt.score +
            " out of " +
            attempt.total;

        historyDiv.appendChild(p);
    }
}

function restartTraining() {
    window.location.href = "memory.html";
}

function goHome() {
    window.location.href = "index.html";
}