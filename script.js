// Restore login functionality
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'verona' && password === 'vientiane') {
        window.location.href = 'home.html';
    } else {
        alert('Incorrect username or password.');
    }
}

// Restore the logic for checking answers in the photo puzzle
let currentQuestion = 0;

function checkAnswer() {
    const answers = ['meditation', 'e', '14/12/2018'];
    const answer = document.getElementById('answer').value.toLowerCase();

    if (currentQuestion == 1) {
        document.getElementById('question').innerText = getQuestion(currentQuestion);
        document.getElementById('answer').value = ''; // Clear previous answer
        currentQuestion++;
        return;
    }
    else if (answer === answers[currentQuestion] && currentQuestion != 1) {
        document.querySelector(`.part${currentQuestion + 1}`).style.backgroundColor = 'transparent'; // Reveal puzzle part
        currentQuestion++;

        if (currentQuestion < answers.length) {
            document.getElementById('question').innerText = getQuestion(currentQuestion);
            document.getElementById('answer').value = ''; // Clear previous answer
            return;
        } else {
            // All questions answered, redirect to choice.html
            window.location.href = 'choice.html';
        }
    }
    else {
        alert('Incorrect, try again!');
    }

}

function getQuestion(index) {
    const questions = [
        'What’s your usual birthday tradition ? (answer in 1 word, lower-case)',
        'What is one thing you want to achieve by your next birthday ?',
        'What is the date on which you sent me your first photo ? (format: dd/mm/yyyy)'
    ];
    return questions[index];
}

function goToChoice() {
    window.location.href = 'choice.html';
}

function selectChoice(choice) {
    if (choice == 'saving for travelling') {
        document.querySelector('.centered-box').innerHTML = `<h2>Congratulations ! You have answered all the questions! You have won 250€ for a flight ticket of your choice!</h2>`;
    }
    else {
        document.querySelector('.centered-box').innerHTML = `<h2>Congratulations ! You have answered all the questions! But we don't have beauty products in stock :(. What about 250€ for a flight ticket of your choice ?</h2>`;
    }
    
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
            origin: { x: 0.1, y: 0.9 },
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
            origin: { x: 0.9, y: 0.1 },
            particleCount: 10,
            spread: 70
        });
    }, 200);
}
