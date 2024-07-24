function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid credentials';
    }
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
