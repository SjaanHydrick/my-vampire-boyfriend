import { renderAvatar, renderUserName } from './render-avatar.js';
import { getFromLocalStorage } from './manage-local-storage.js';
import { cafeteria } from '../data/scenes.js';
import { renderResponses } from './render-responses.js';
import { renderDialogueBox } from './render-dialogue-box.js';


const screen = document.querySelector('#screen');
const dialogueBox = document.createElement('p');
dialogueBox.id = 'dialogue-box';
screen.appendChild(dialogueBox);

const vent = document.getElementById('vent');

const userData = getFromLocalStorage();

const avatar = renderAvatar();
vent.appendChild(avatar);

const playerName = renderUserName();
vent.appendChild(playerName);

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const dialButton = document.getElementById('dial-button');

dialButton.textContent = 'Next';

button1.addEventListener('click', funcButton1);
function funcButton1(){
    cafeteria.choices[0].responseFunction();
}

button2.addEventListener('click', funcButton2);
function funcButton2(){
    cafeteria.choices[1].responseFunction();
}

screen.style.backgroundImage = `url('../assets/${cafeteria.image}')`;
screen.style.backgroundSize = '625px 525px';

const responseSection = renderResponses(cafeteria);
const characterImage = document.createElement('img');
characterImage.id = 'character-image';
characterImage.src = `../assets/${cafeteria.char}`;

renderDialogueBox(cafeteria.dialogueBox);


screen.appendChild(characterImage);
screen.appendChild(responseSection);
