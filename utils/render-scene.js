
import { renderBeat } from './render-beat.js';
import { renderVent } from './render-vent.js';
import { renderLogo } from './render-logo.js';
import { renderTransition } from './render-transition.js';
import { playGameAudio, renderVolumeSlider } from './game-audio.js';

// renderScene takes in a JSON, and uses it to render the bulk of the elements on the
// game-play screen.  
export function renderScene(object) {

    const screenFrame = document.querySelector('#screenframe');
    // each scene begins with a transition slide, renderTransition 
    const screen = renderTransition(object.transitionTitle);
    // renders the volume slider and attaches it to the vent section
    renderVolumeSlider();

    screenFrame.appendChild(screen);
    // after 5.5 second transition slide, render scene elements
    setTimeout(function() {
        renderScreen(object);
        playGameAudio();
    }, 5500);

}


function renderScreen(object) {
    // clears out all current screen data and renders the elements from scratch
    const screenFrame = document.querySelector('#screenframe');
    screenFrame.innerHTML = '';
    const screen = document.createElement('section');

    // renderBeat renders the elements relevant to beats, rather than scenes
    const beatSection = renderBeat(object);

    screen.id = 'screen';
    // loads backgroundImage of scene
    screen.style.backgroundImage = `url('../assets/${object.image}')`;

    screen.appendChild(beatSection);
    // renders the logo/about us link and attaches it to the screen
    const logo = renderLogo();
    screen.appendChild(logo);
    // attaches scene elements to frame
    screenFrame.appendChild(screen);
}

export function updateScene(object) {
    // clears out current scene elements
    const screenFrame = document.getElementById('screenframe');
    screenFrame.innerHTML = '';
    // renders scene from passed JSON
    renderScene(object);
    // clears out vent section
    const ventSection = document.getElementById('vent');
    ventSection.innerHTML = '';
    // repopulates vent section
    renderVent();

}