import { renderResultText, renderDatesText} from './render-result-text.js';
import { renderVent } from './render-vent.js';
const screen = document.querySelector('#screen');
const button = document.querySelector('#dial-button');
const resultText = document.createElement('p');
const numberOfDates = document.createElement('p');
renderVent();
renderResultText(resultText);
renderDatesText(numberOfDates);
screen.appendChild(resultText);
screen.appendChild(numberOfDates);

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});



