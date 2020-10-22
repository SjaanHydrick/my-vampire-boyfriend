import { renderResultText, renderDatesText, renderResultImage } from './render-result-text.js';
import { renderVent } from './render-vent.js';
const screen = document.querySelector('#screen');
const button = document.querySelector('#dial-button');
const resultText = document.createElement('p');
const numberOfDates = document.createElement('p');
const linkp = document.createElement('p');
const image = document.createElement('img')
const link = document.createElement('a')
image.classList.add('result-image');
const div = document.createElement('div');
div.classList.add('text-div');
resultText.classList.add('result-text');
numberOfDates.classList.add('date-text');

renderVent();
renderResultText(resultText);
renderDatesText(numberOfDates);
renderResultImage(image);
link.href = '../about-us';
link.classList.add('about');
link.textContent = 'About us';


div.appendChild(resultText);
div.appendChild(numberOfDates);
numberOfDates.appendChild(link);
div.appendChild(image);
screen.appendChild(div);

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});



