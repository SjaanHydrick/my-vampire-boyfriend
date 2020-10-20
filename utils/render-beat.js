import { renderResponses } from './render-responses.js';
import { renderDialogueBox } from './render-dialogue-box.js';
import { renderButtons } from './render-buttons.js';


export function renderBeat(object){
    const section = document.createElement('section');

    const dialogueBox = renderDialogueBox(object.dialogueBox);
    const responseSection = renderResponses(object.choices);
    renderButtons(object);

    section.id = "beat-section";

    section.appendChild(dialogueBox);
    section.appendChild(responseSection);

    return section;
}

export function updateBeat(beat){
    const oldBeatSection = document.getElementById('beat-section');
    oldBeatSection.innerHTML = '';
    const newBeatSection = renderBeat(beat);
    oldBeatSection.appendChild(newBeatSection);
    
}