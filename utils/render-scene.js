
import { renderBeat } from './render-beat.js';
import { renderVent } from './render-vent.js';
import { renderLogo } from './render-logo.js';
import { renderTransition } from './render-transition.js';


export function renderScene(object){
    const screenFrame = document.querySelector('#screenframe');

    screen = renderTransition(object.transitionTitle);
    screenFrame.appendChild(screen);
    setTimeout(function() {
        renderScreen(object);
    }, 7000);

    
}

function renderScreen(object){
    const screenFrame = document.querySelector('#screenframe');
    screenFrame.innerHTML = '';
    const screen = document.createElement('section');


    const beatSection = renderBeat(object);

    screen.id = 'screen';
    screen.style.backgroundImage = `url('../assets/${object.image}')`;

    screen.appendChild(beatSection);
    
    const logo = renderLogo();
    screen.appendChild(logo);

    screenFrame.appendChild(screen);
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