import { createGameAudio, playGameAudio } from "../utils/game-audio.js";

const button = document.querySelector('#dial-button');

createGameAudio();
playGameAudio();

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});
