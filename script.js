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
    // Define confetti parameters
    const duration = 5 * 1000; // 5 seconds
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
            origin: { x: 0 }
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
            origin: { x: 1 }
        });
    }, 200);

    // Confetti from the top side
    const intervalTop = setInterval(() => {
        if (Date.now() > animationEnd) {
            clearInterval(intervalTop);
            return;
        }
        confetti({
            angle: 180,
            spread: 60,
            origin: { y: 0 }
        });
    }, 200);

    // Confetti from the bottom side
    const intervalBottom = setInterval(() => {
        if (Date.now() > animationEnd) {
            clearInterval(intervalBottom);
            return;
        }
        confetti({
            angle: 0,
            spread: 60,
            origin: { y: 1 }
        });
    }, 200);
}
