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
    const confettiContainer = document.querySelector('.confetti');
    confettiContainer.style.display = 'block';
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.backgroundColor = ['#ff0000', '#ffffff', '#00ff00'][Math.floor(Math.random() * 3)];
        confettiPiece.style.animationDelay = Math.random() * 5 + 's';
        confettiContainer.appendChild(confettiPiece);
    }
}
