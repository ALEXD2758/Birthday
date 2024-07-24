let currentQuestion = 0;

function checkAnswer() {
    const answers = ['t', 'e', 'a'];
    const answer = document.getElementById('answer').value.toLowerCase();

    if (answer === answers[currentQuestion]) {
        document.querySelector(`.part${currentQuestion + 1}`).style.backgroundColor = '#fff'; // Reveal puzzle part
        currentQuestion++;

        if (currentQuestion < answers.length) {
            document.getElementById('question').innerText = getQuestion(currentQuestion);
            document.getElementById('answer').value = ''; // Clear previous answer
        } else {
            window.location.href = 'choice.html'; // Redirect to choice page
        }
    } else {
        alert('Incorrect, try again!');
    }
}

function getQuestion(index) {
    const questions = [
        'What is the first letter of "tut"?',
        'What is the last letter of "tie"?',
        'What is the first letter of "alphabet"?'
    ];
    return questions[index];
}

function goToChoice() {
    window.location.href = 'choice.html';
}
