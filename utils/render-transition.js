import { renderDialogueBox } from './render-dialogue-box.js';

export function renderTransition(transitionTitle){

    let screenSection = document.createElement('section');
    screenSection.id = 'screen';
    screenSection.classList.add('transition-screen');
    screenSection.style.backgroundImage = `url('../assets/transition-background.jpg')`;

    let dialogueBox = renderDialogueBox(transitionTitle);

    screenSection.appendChild(dialogueBox);

    return screenSection;
}