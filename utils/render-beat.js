import { renderResponses } from './render-responses.js';
import { renderDialogueBox } from './render-dialogue-box.js';
import { renderButtons } from './render-buttons.js';


// renderBeat() renders only the HTML elements that are neccisary within a scene
// renders the dialogueBox, responses, and wires the buttons to the responses
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

// updateBeat() is just to be used when scene has already been loaded
// updateBeat() clears out all dialogue and responses, then calls
// renderBeat() to update them with the new information
export function updateBeat(beat){
    const oldBeatSection = document.getElementById('beat-section');
    oldBeatSection.innerHTML = '';
    const newBeatSection = renderBeat(beat);
    oldBeatSection.appendChild(newBeatSection);
    
}