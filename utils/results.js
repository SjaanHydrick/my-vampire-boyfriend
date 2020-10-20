import { renderResultText } from './render-result-text.js';
import { renderVent } from './render-vent.js';
const screen = document.querySelector('#screenframe');

const resultText = document.createElement('p');
renderVent();
renderResultText(resultText);

screen.appendChild(resultText);



