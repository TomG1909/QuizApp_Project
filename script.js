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

    }

]
let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {

        document.getElementById('endscreen').style = '';
        document.getElementById('quizBody').style = 'display: none';





    } else {
        let question = questions[currentQuestion];

        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion]; //Entsprechende zugehörige Frage an der Stelle 0 gewählt
    console.log('selected answer is', selection)
    let selectedQuestionNumber = selection.slice(-1); //Es wird auf die letzte Stelle des Strings zugegriffen, hier: answer_X
    console.log('selectedQuestionNumber is', selectedQuestionNumber)
    console.log('Current question is', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.parentNode.classList.add('bg-success');
        document.getElementById(selection).parentNode.classList.remove('text-secondary');
    } else {
        console.log('Falsche Antwort!!');
        document.getElementById(selection).parentNode.parentNode.classList.add('bg-danger');
        document.getElementById(selection).parentNode.classList.remove('text-secondary');
        document.getElementById(idOfRightAnswer).parentNode.parentNode.classList.add('bg-success');
        document.getElementById(idOfRightAnswer).parentNode.classList.remove('text-secondary');
    }
    document.getElementById('nextbutton').disabled = false;

}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextbutton').disabled = true;
    showQuestion();
    resetAnswers();

}

function resetAnswers() {
    document.getElementById('answer_1').parentNode.parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.add('text-secondary');

    document.getElementById('answer_2').parentNode.parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.add('text-secondary');

    document.getElementById('answer_3').parentNode.parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.add('text-secondary');

    document.getElementById('answer_4').parentNode.parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.add('text-secondary');
}