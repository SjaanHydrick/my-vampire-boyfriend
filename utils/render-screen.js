import { renderAvatar, renderUserName } from './render-avatar.js';
import { getFromLocalStorage } from './manage-local-storage.js';
import { cafeteria } from '../data/scenes.js';
import { renderResponses } from './render-responses.js';
const screen = document.querySelector('#screen');
const internalDialogueBox = document.createElement('p');
const dialogueBox = document.createElement('p')
// const background = document.createElement('img');
const vent = document.getElementById('vent');

const userData = getFromLocalStorage();

const avatar = renderAvatar();
vent.appendChild(avatar);

const playerName = renderUserName();
vent.appendChild(playerName);

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

screen.style.backgroundImage = `url('../assets/${cafeteria.image}')`;

const responseSection = renderResponses(cafeteria);
const characterImage = document.createElement('img');
characterImage.id = 'character-image';
characterImage.src = `../assets/${cafeteria.char}`;


internalDialogueBox.classList.add('hidden');
dialogueBox.classList.add('hidden');

dialogueBox.id = 'dialogue-box';
dialogueBox.textContent = cafeteria.dialogueBox;
screen.appendChild(characterImage);
screen.appendChild(dialogueBox);
screen.appendChild(responseSection);
screen.appendChild(internalDialogueBox);
