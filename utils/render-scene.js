
import { renderBeat } from './render-beat.js';
import { renderVent } from './render-vent.js';
import { renderLogo } from './render-logo.js';


export function renderScene(object){
    const screen = document.createElement('section');


    const beatSection = renderBeat(object);

    screen.id = 'screen';
    screen.style.backgroundImage = `url('../assets/${object.image}')`;

    screen.appendChild(beatSection);
    
    const logo = renderLogo();
    screen.appendChild(logo);

    return screen;
}

export function updateScene(object){
    const screenFrame = document.getElementById('screenframe');
    screenFrame.innerHTML = '';

    const newScreen = renderScene(object);
    screenFrame.appendChild(newScreen);
    

    const ventSection = document.getElementById('vent');
    ventSection.innerHTML = '';
    renderVent();

}