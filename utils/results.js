import { renderResultText, renderDatesText, renderResultImage } from './render-result-text.js';
import { renderVent } from './render-vent.js';
import { createGameAudio, playGameAudio } from './game-audio.js';
const screen = document.querySelector('#screen');
const button = document.querySelector('#dial-button');
const resultText = document.createElement('p');
const linkBox = document.createElement('p');
const numberOfDates = document.createElement('p');
const image = document.createElement('img');
const link = document.createElement('a');
image.classList.add('result-image');
const div = document.createElement('div');
div.classList.add('text-div');
resultText.classList.add('result-text');
numberOfDates.classList.add('date-text');


createGameAudio();
playGameAudio();

renderVent();
renderResultText(resultText);
renderDatesText(numberOfDates);
renderResultImage(image);
link.href = '../about-us';
link.classList.add('about');
link.textContent = 'Learn More About Us';


div.appendChild(resultText);
div.appendChild(numberOfDates);
linkBox.appendChild(link);
div.appendChild(image);
div.appendChild(linkBox);
screen.appendChild(div);

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});



