/* jshint esversion: 8 */

// Javascript for index.html
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const openMessage = document.getElementById('open');
const highScoresBtn = document.getElementById('high');
const progressText = document.getElementById('progress-text');
const progressBarFull = document.getElementById('progressBarFull');

let scoreElement = document.getElementById('score');
let shuffleQuestions, currentQuestionIndex;
let score = 0;

const maxQuestions = 5;

// Event listeners for start and next buttons. 
// When start button is clicked, start game function is called.
// When next button is clicked, question index loop starts and set next question function is called .
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
// Function starts the game, adds the hide class to several elements, shuffle questions is defiend by sorting 
// questions using Math.random and next question function is called.
function startGame() {
    startButton.classList.add('hide');
    openMessage.classList.add('hide');
    highScoresBtn.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}
// Function sets up next question, once max questions have been asked and answered, score is saved into local storage and 
// the page will be automatically referred to 'end.html'.
function setNextQuestion() {
    resetState();
    if ((currentQuestionIndex + 1) <= maxQuestions) {
        showQuestion(shuffleQuestions[currentQuestionIndex]);
    } else {
        localStorage.setItem('mostRecentScore', score);
        window.location.href = 'end.html';
    }

    // For progress bar increments as questions have been asked.
    progressBarFull.style.width = `${(currentQuestionIndex/maxQuestions) * 100}%`;
    // For progress text increments as questions are showed.
    setTimeout(() => {
        progressText.innerText = `Question ${currentQuestionIndex + 1} of ${maxQuestions}`;
    }, 500);

}

// Function shows the question and answer options. Creates a button element for each of the answers. 
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // Event listener for selected answer by the user.
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Function reset removes next button
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Function calls on score to be incremented if selected answer is correct.
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        incrementScore();
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    // Next question button is displayed.
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }
}

// Function sets classes on correct and incorrect answers.
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
        element.disabled = true;
    } else
        element.classList.add('incorrect');
    element.disabled = true;
}


// Function removes correct and incorrect classes for next question.
function clearStatusClass(element) {
    element.classList.remove('correct', 'incorrect');
    element.disabled = false;
}

// Function to increment score
function incrementScore() {
    score++;
    scoreElement.innerText = score;
}