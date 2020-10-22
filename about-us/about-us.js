import { createGameAudio, playGameAudio, renderVolumeSlider } from "../utils/game-audio.js";

const button = document.querySelector('#dial-button');

createGameAudio();
renderVolumeSlider();
playGameAudio();

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});
