import { renderResultText, renderDatesText} from './render-result-text.js';
import { renderVent } from './render-vent.js';
const screen = document.querySelector('#screen');
const button = document.querySelector('#dial-button');
const resultText = document.createElement('p');
const numberOfDates = document.createElement('p');
const div = document.createElement('div');
div.classList.add('text-div');
resultText.classList.add('result-text');
numberOfDates.classList.add('date-text');
renderVent();
renderResultText(resultText);
renderDatesText(numberOfDates);
div.appendChild(resultText);
div.appendChild(numberOfDates);
screen.appendChild(div);

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});



