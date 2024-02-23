const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];



highScoresList.innerHTML = highScores.map(score => {
    return `<ul style="list-style-type:disc;"><li class="high-score">${score.name} - ${score.score}</li></ul>`;}).join("");



