let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },
    {
        "question": "Was bedeutet die Abkürzung HTML?",
        "answer_1": "HyperText Markup Locater",
        "answer_2": "HyperText Markup Language",
        "answer_3": "HyperText Makeup Language",
        "answer_4": "HiperText Markup Language",
        "right_answer": 2,

    },
    {
        "question": "Mit welchem Buchstaben lässt sich Fettdruck erreichen?",
        "answer_1": "a",
        "answer_2": "b",
        "answer_3": "c",
        "answer_4": "d",
        "right_answer": 2,

    },
    {
        "question": "Mit welchem Befehl beginnt jede Homepage-Programmierung?",
        "answer_1": "html",
        "answer_2": "body",
        "answer_3": "title",
        "answer_4": "b",
        "right_answer": 1,

    }

]

let currentQuestion = 0;
let rightQuestions = 0;
let audio_success = new Audio('Audio/success.mp3');
let audio_fail = new Audio('Audio/fail.mp3');

function init() {

    showStartScreen();
    resetProgressbarAndLinks()
}


function hideStartScreen() {
    document.getElementById('start').classList.add('d-none');
    document.getElementById('quizBody').style = '';
    document.getElementById('startlink').classList.remove('active-link');
    document.getElementById('quizlink').classList.add('active-link');

    showQuestion();

}

function showStartScreen() {
    document.getElementById('start').classList.remove('d-none');
    document.getElementById('quizBody').style = 'display: none';
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('startlink').classList.add('active-link');
    document.getElementById('scorelink').classList.add('disabled-link');
}


function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}


function showEndScreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('quizBody').style = 'display: none';
    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('score').innerHTML = rightQuestions;
    document.getElementById('scorelink').classList.remove('disabled-link');
    document.getElementById('scorelink').classList.add('active-link');
    document.getElementById('quizlink').classList.remove('active-link');

}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = percent * 100;
    document.getElementById('progress-bar').innerHTML = `${percent}%`
    document.getElementById('progress-bar').style = `width:${percent}%`

}


function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function answer(selection) {
    if (rightAnswerSelected(selection)) {
        rightAnswerLogic(selection);
    } else {
        wrongAnswerLogic(selection);
    }
    document.getElementById('nextbutton').disabled = false;

}


function rightAnswerSelected(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); //Es wird auf die letzte Stelle des Strings zugegriffen, hier: answer_X

    return selectedQuestionNumber == question['right_answer'];
}


function rightAnswerLogic(selection) {
    document.getElementById(selection).parentNode.parentNode.classList.add('bg-green');
    document.getElementById(selection).parentNode.classList.remove('text-secondary');
    audio_success.currentTime = 0;
    audio_success.play();
    rightQuestions++;

}


function wrongAnswerLogic(selection) {
    let question = questions[currentQuestion];
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    document.getElementById(selection).parentNode.parentNode.classList.add('bg-red');
    document.getElementById(selection).parentNode.classList.remove('text-secondary');
    document.getElementById(idOfRightAnswer).parentNode.parentNode.classList.add('bg-green');
    document.getElementById(idOfRightAnswer).parentNode.classList.remove('text-secondary');
    audio_fail.currentTime = 0;
    audio_fail.play();
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextbutton').disabled = true;
    showQuestion();
    resetAnswers();
}


function resetAnswers() {

    document.getElementById('answer_1').parentNode.parentNode.classList.remove('bg-red');
    document.getElementById('answer_1').parentNode.parentNode.classList.remove('bg-green');
    document.getElementById('answer_1').parentNode.classList.add('text-secondary');

    document.getElementById('answer_2').parentNode.parentNode.classList.remove('bg-red');
    document.getElementById('answer_2').parentNode.parentNode.classList.remove('bg-green');
    document.getElementById('answer_2').parentNode.classList.add('text-secondary');

    document.getElementById('answer_3').parentNode.parentNode.classList.remove('bg-red');
    document.getElementById('answer_3').parentNode.parentNode.classList.remove('bg-green');
    document.getElementById('answer_3').parentNode.classList.add('text-secondary');

    document.getElementById('answer_4').parentNode.parentNode.classList.remove('bg-red');
    document.getElementById('answer_4').parentNode.parentNode.classList.remove('bg-green');
    document.getElementById('answer_4').parentNode.classList.add('text-secondary');
}

function resetProgressbarAndLinks() {
    document.getElementById('startlink').classList.add('active-link');
    document.getElementById('scorelink').classList.add('disabled-link');
    document.getElementById('scorelink').classList.remove('active-link');
    document.getElementById('quizlink').classList.remove('active-link');

    document.getElementById('progress-bar').innerHTML = '';
    document.getElementById('progress-bar').style = '';
}


function restartGame() {
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('quizBody').style = '';

    currentQuestion = 0;
    rightQuestions = 0;

    init();

}