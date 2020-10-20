import { getFromLocalStorage } from './manage-local-storage.js';

import { renderBeat } from './render-beat.js';

export function renderScene(object){
    const screen = document.createElement('section');
    const characterImage = document.createElement('img');

    const beatSection = renderBeat(object);

    screen.id = "screen";
    screen.style.backgroundImage = `url('../assets/${object.image}')`;

    characterImage.id = 'character-image';
    characterImage.src = `../assets/${object.char}`;

    screen.appendChild(beatSection);
    screen.appendChild(characterImage);
    // screen.appendChild(responseSection);

    return screen;
}