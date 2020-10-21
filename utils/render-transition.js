import { renderDialogueBox } from './render-dialogue-box.js';

export function renderTransition(transitionText){

    let screenSection = document.createElement('section');
    screenSection.id = 'screen';
    screenSection.classList.add('transition-screen');

    let transitionCard = renderTransitionTitle(transitionText);
    screenSection.appendChild(transitionCard);
    playTransitionAudio();
    return screenSection;
}

function renderTransitionTitle(transitionText){
    
    let titleSpan = document.createElement('span');
    let subtitleSpan = document.createElement('span');
    let titleDiv = document.createElement('div');

    titleSpan.id = 'transition-title';
    titleSpan.textContent = transitionText.title;

    subtitleSpan.id = 'transition-subtitle';
    subtitleSpan.textContent = transitionText.subtitle;

    titleDiv.appendChild(titleSpan);
    titleDiv.appendChild(subtitleSpan);

    return titleDiv;
}

function playTransitionAudio(){
    let audioElement = new Audio("../assets/transition-clip.mp3");
    audioElement.volume = 0.4;
    audioElement.play();
}