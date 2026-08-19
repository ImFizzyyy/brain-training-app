function submitAnswers() {

    let userAnswers = [
        document.getElementById("answer1").value.trim().toLowerCase(),
        document.getElementById("answer2").value.trim().toLowerCase(),
        document.getElementById("answer3").value.trim().toLowerCase(),
        document.getElementById("answer4").value.trim().toLowerCase(),
        document.getElementById("answer5").value.trim().toLowerCase()
    ];

    localStorage.setItem(
        "userAnswers",
        JSON.stringify(userAnswers)
    );

    window.location.href = "result.html";
}