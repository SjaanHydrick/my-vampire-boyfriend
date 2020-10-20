import { getFromLocalStorage } from './manage-local-storage.js';
import { renderResponses } from './render-responses.js';
import { renderDialogueBox } from './render-dialogue-box.js';

export function renderScreen(cafeteria){
    const screen = document.createElement('section');
    const characterImage = document.createElement('img');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    const dialogueBox = renderDialogueBox(cafeteria.dialogueBox);
    const responseSection = renderResponses(cafeteria.choices);

    screen.id = "screen";
    screen.style.backgroundImage = `url('../assets/${cafeteria.image}')`;

    characterImage.id = 'character-image';
    characterImage.src = `../assets/${cafeteria.char}`;

    button1.addEventListener('click', funcButton1);
    function funcButton1(){
        cafeteria.choices[0].responseFunction();
    }

    button2.addEventListener('click', funcButton2);
    function funcButton2(){
        cafeteria.choices[1].responseFunction();
    }

    screen.appendChild(dialogueBox);
    screen.appendChild(characterImage);
    screen.appendChild(responseSection);

    return screen;
}