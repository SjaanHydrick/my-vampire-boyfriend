
const beginButton = document.getElementById('begin-button');

beginButton.textContent = 'New Game';

beginButton.addEventListener('click', () => {
    location.href = './character-creation/';
});