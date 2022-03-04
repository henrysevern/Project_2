const username = document.querySelector('#username');
const saveScore = document.querySelector('#saveScoreButton');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('score');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const maxHighScores = 4

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const endScore = {
        endScore: mostRecentScore,
        name: username.value
    }

    highScores.push(endScore)
    highScores.sort((a,b) => {
        return b.endScore - a.endScore
    })

    highScores.splice(4)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}