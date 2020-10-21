import { renderDialogueBox } from './render-dialogue-box.js';

export function renderTransition(transitionText){

    // let screenSection = document.createElement('section');
    // screenSection.id = 'screen';
    // screenSection.classList.add('transition-screen');

    // let transitionText = renderTransitionTitle(transitionText);

    // return screenSection;
}

function renderTransitionTitle(transitionText){
    
    let titleSpan = document.createElement('span');
    let subtitleSpan = document.createElement('span');

    titleSpan.id = "vampire";
    titleSpan.textContent = transitionText.title;

    subtitleSpan.id = "boyfriend";
    subtitleSpan.textContent = transitionText.subtitle;
}