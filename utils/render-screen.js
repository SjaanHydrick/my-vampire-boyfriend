//  import { renderAvater } from './render-avatar.js';
import { getFromLocalStorage } from './manage-local-storage.js';
import { cafeteria } from '../data/scenes.js';
const screen = document.querySelector('#screen');
const internalDialogueBox = document.createElement('p');
const dialogueBox = document.createElement('p')
const background = document.createElement('img');
const vent = document.getElementById('vent');

const userData = getFromLocalStorage();
console.log(userData);

const avatar = document.createElement('img');
avatar.id = "avatar";
avatar.src = `../assets/${userData.avatar}`;
vent.appendChild(avatar);

const playerName = document.createElement('p');
playerName.id = "player-name";
playerName.textContent = userData.name;
vent.appendChild(playerName);

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

screen.style.backgroundImage = "url('../assets/castle.jpg')";

const responseSection = document.createElement('section');
for (let choice of cafeteria.choices){
    const response = document.createElement('p');
    response.classList.add('response');
    response.textContent = choice.response;
    responseSection.appendChild(response);
}


// background.classList.add('background');
// background.src = `../assets/${ cafeteria.image }`;
// const section = document.createElement('section')
//  vent.appendChild(renderAvater());

internalDialogueBox.classList.add('hidden');
dialogueBox.classList.add('hidden');

dialogueBox.id = 'dialogue-box';
dialogueBox.textContent = cafeteria.dialogueBox;







// screen.appendChild(section);
screen.appendChild(dialogueBox);
screen.appendChild(responseSection);
// screen.appendChild(background);
screen.appendChild(internalDialogueBox);
