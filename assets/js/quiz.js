const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const openMessage = document.getElementById('open');
const progressBarFull = document.getElementById('progressBarFull');
let scoreElement = document.getElementById('score');

let shuffleQuestions, currentQuestionIndex;
let score = 0;

const maxQuestions = 4;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    openMessage.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if((currentQuestionIndex + 1) <= maxQuestions) {
        showQuestion(shuffleQuestions[currentQuestionIndex])
    } else {
        window.location.href = 'end.html'
    };
    
    progressBarFull.style.width = `${(currentQuestionIndex/maxQuestions) * 100}%`;
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    };
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if(correct) {
        incrementScore();
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

// Function sets classes on correct and incorrect answers and call 'incrementScore' function if answer is correct.
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else
        element.classList.add('incorrect');
}

// Function removes correct and incorrect classes after answer has been selected for next question.
function clearStatusClass(element) {
    element.classList.remove('correct', 'incorrect');
}

// Function to increment score
function incrementScore() {
    score++;
    scoreElement.innerText = score;
}

// Javascript for end.html 

const username = document.querySelector('#username');
const saveScore = document.querySelector('#saveScoreButton');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = document.querySelector('#mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const maxHighScores = 10

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
})