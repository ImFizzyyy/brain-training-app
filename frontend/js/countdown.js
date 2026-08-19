let count = 3;

let countdownText = document.getElementById("countdown");

let timer = setInterval(function() {

    count--;

    countdownText.innerHTML = count;

    if (count === 0) {
        clearInterval(timer);

        window.location.href = "memory.html";
    }

}, 1000);