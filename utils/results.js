import { renderResultText } from './render-result-text.js'
const screen = document.querySelector('#screenframe')

const resultText = document.createElement('p');

 renderResultText(resultText);

 screen.appendChild(resultText);



