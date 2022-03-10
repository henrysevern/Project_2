/* jshint esversion: 8 */

// Javascript for highscores.html

const highScoresList = document.querySelector('#highScoresList');

// highScores variable retrives 'highscore' from Local Storage using JSON.parse() to convert the string to an object.
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Creates a list element for the leaderboard using the score and the saved name.
highScoresList.innerHTML = highScores.map(score => {
    return `<li class=high-score>${score.name} - ${score.score}</li>`;
}).join('');