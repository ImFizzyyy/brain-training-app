let wordList = [
    "apple",
    "chair",
    "river",
    "book",
    "flower",
    "table",
    "dog",
    "car",
    "tree",
    "phone",
    "house",
    "bird"
];


function getRandomWords() {

    let shuffled = [...wordList].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 5);

}

let selectedWords = getRandomWords();

localStorage.setItem(
    "correctAnswers",
    JSON.stringify(selectedWords)
);

let wordsDiv = document.getElementById("words");

selectedWords.forEach(function (word) {
    let p = document.createElement("p");
    p.innerHTML = word;
    wordsDiv.appendChild(p);
});



function startRecall() {
    window.location.href = "recall.html";
}


function startTimer() {
    let timeLeft = 10;
    let timer = document.getElementById("timer");
    let words = document.getElementById("words");

    words.style.display = "none";
    timer.innerHTML = timeLeft;

    let countdown = setInterval(function () {
        timeLeft--;
        timer.innerHTML = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdown);
            window.location.href = "recall.html";
        }
    }, 1000);
}