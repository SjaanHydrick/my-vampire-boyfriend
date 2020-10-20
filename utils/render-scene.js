
import { renderBeat } from './render-beat.js';
import { renderCharacter } from './render-character.js';

export function renderScene(object){
    const screen = document.createElement('section');

    const characterSection = renderCharacter(object.char);
    const beatSection = renderBeat(object);

    screen.id = 'screen';
    screen.style.backgroundImage = `url('../assets/${object.image}')`;

    screen.appendChild(beatSection);
    screen.appendChild(characterSection);

    return screen;
}

export function updateScene(object){
    const screenFrame = document.getElementById('screenframe');
    screenFrame.innerHTML = '';

    const newScreen = renderScene(object);
    screenFrame.appendChild(newScreen);

  
}