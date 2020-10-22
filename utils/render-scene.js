
import { renderBeat } from './render-beat.js';
import { renderVent } from './render-vent.js';
import { renderLogo } from './render-logo.js';
import { renderTransition } from './render-transition.js';
import { playGameAudio, renderVolumeSlider } from './game-audio.js';

// renderScene
export function renderScene(object) {

    const screenFrame = document.querySelector('#screenframe');

    screen = renderTransition(object.transitionTitle);
    renderVolumeSlider();
    screenFrame.appendChild(screen);
    setTimeout(function () {
        renderScreen(object);
        playGameAudio();
    }, 5500);

}



function renderScreen(object) {

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

export function updateScene(object) {
    const screenFrame = document.getElementById('screenframe');
    screenFrame.innerHTML = '';

    renderScene(object);

    const ventSection = document.getElementById('vent');
    ventSection.innerHTML = '';
    renderVent();

}