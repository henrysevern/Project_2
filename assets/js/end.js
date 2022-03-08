const username = document.querySelector('#username');
const saveScore = document.querySelector('#saveScoreButton');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
});

saveHighScore = e => {
    e.preventDefault();

    const endScore = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(endScore)
    highScores.sort((a,b) => {
        return b.endScore - a.endScore
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
}