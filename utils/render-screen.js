
import { cafeteria } from '../data/scenes.js';
const screen = document.querySelector('#screen');
const internalDialogueBox = document.createElement('p');
const dialogueBox = document.createElement('p')
const background = document.createElement('img');
background.classList.add('background');
background.src = `../assets/${ cafeteria.image }`;
// const section = document.createElement('section')


internalDialogueBox.classList.add('hidden');
dialogueBox.classList.add('hidden');






// screen.appendChild(section);
screen.appendChild(background);
// screen.appendChild(internalDialogueBox);
// screen.appendChild(dialogueBox);