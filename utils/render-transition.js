import { playTransitionAudio } from './game-audio.js';
import { resetDialButton } from './render-dial-button.js';


export function renderTransition(transitionText) {
    //    creates section that will hold transition elements
    let screenSection = document.createElement('section');
    screenSection.id = 'screen';
    screenSection.classList.add('transition-screen');
    // populates transition text
    let transitionCard = renderTransitionTitle(transitionText);
    screenSection.appendChild(transitionCard);
    // changes audio source to transition song
    playTransitionAudio();
    // disables dial button during transition
    resetDialButton();

    return screenSection;
}

function renderTransitionTitle(transitionText) {
    let titleSpan = document.createElement('span');
    let subtitleSpan = document.createElement('span');
    let titleDiv = document.createElement('div');
    // creates and populates title text span
    titleSpan.id = 'transition-title';
    titleSpan.textContent = transitionText.title;
    // creates and populates subtitle text span
    subtitleSpan.id = 'transition-subtitle';
    subtitleSpan.textContent = transitionText.subtitle;
    // appends title spans to main div to pass back to renderTransition
    titleDiv.appendChild(titleSpan);
    titleDiv.appendChild(subtitleSpan);

    return titleDiv;
}

