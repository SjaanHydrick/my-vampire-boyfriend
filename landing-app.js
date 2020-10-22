import { renderVolumeSlider } from "./utils/game-audio.js";

const beginButton = document.getElementById('begin-button');

renderVolumeSlider();
beginButton.textContent = 'New Game';

beginButton.addEventListener('click', () => {
    location.href = './character-creation/';
});