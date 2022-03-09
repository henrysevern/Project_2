// Javascript for end.html.
const username = document.querySelector('#username');
const saveScore = document.querySelector('#saveScoreButton');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerText = mostRecentScore;

// Event listener so something has to be typed in order to save score.
username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
});

// Most recent score is stringified and set to local storage. Once highscore is saved page is refreshed. 
saveHighScore = e => {
    e.preventDefault();

    const endScore = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(endScore)

    highScores.sort((a, b) => {
        return b.endScore - a.endScore
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
}