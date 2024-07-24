// Restore login functionality
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'home.html';
    } else {
        alert('Incorrect username or password.');
    }
}

// Restore the logic for checking answers in the photo puzzle
let currentQuestion = 0;

function checkAnswer() {
    const answers = ['t', 'e', 'a'];
    const answer = document.getElementById('answer').value.toLowerCase();

    if (answer === answers[currentQuestion]) {
        document.querySelector(`.part${currentQuestion + 1}`).style.backgroundColor = 'transparent'; // Reveal puzzle part
        currentQuestion++;

        if (currentQuestion < answers.length) {
            document.getElementById('question').innerText = getQuestion(currentQuestion);
            document.getElementById('answer').value = ''; // Clear previous answer
        } else {
            // All questions answered, redirect to choice.html
            window.location.href = 'choice.html';
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

function selectChoice(choice) {
    document.querySelector('.centered-box').innerHTML = `<h2>You have won: 100€ of ${choice}</h2>`;
    startConfetti();
}

function startConfetti() {
    const duration = 3 * 1000; // 3 seconds
    const animationEnd = Date.now() + duration;

    // Confetti from the left side
    const intervalLeft = setInterval(() => {
        if (Date.now() > animationEnd) {
            clearInterval(intervalLeft);
            return;
        }
        confetti({
            angle: 90,
            spread: 60,
            origin: { x: 0.1 },
            particleCount: 10,
            spread: 70
        });
    }, 200);

    // Confetti from the right side
    const intervalRight = setInterval(() => {
        if (Date.now() > animationEnd) {
            clearInterval(intervalRight);
            return;
        }
        confetti({
            angle: 270,
            spread: 60,
            origin: { x: 0.9 },
            particleCount: 10,
            spread: 70
        });
    }, 200);
}
