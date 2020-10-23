import { renderDialogueBox } from './render-dialogue-box.js';
import { renderCharacter } from './render-character.js';


// renderBeat() renders only the HTML elements that are neccisary within a scene
// renders the dialogueBox, responses, and wires the buttons to the responses
export function renderBeat(object) {
    const section = document.createElement('section');
    // all beats have dialogue boxes
    // this returns rendered dialogue box
    const dialogueBox = renderDialogueBox(object);

    section.id = 'beat-section';

    section.appendChild(dialogueBox);
    // if there is a left character image in this beat, render it
    if (object.leftChar) {
        const leftChar = renderCharacter(object.leftChar, 'left-char');
        section.appendChild(leftChar);
    }
    // if there is a right character image in this beat, render it
    if (object.rightChar) {
        const rightChar = renderCharacter(object.rightChar, 'right-char');
        section.appendChild(rightChar);
    }

    return section;
}

// updateBeat() is just to be used when scene has already been loaded
// updateBeat() clears out all dialogue and responses, then calls
// renderBeat() to update them with the new information
export function updateBeat(beat) {
    const oldBeatSection = document.getElementById('beat-section');
    // pulls and clears beats elements
    oldBeatSection.innerHTML = '';
    // renders new beat elements
    const newBeatSection = renderBeat(beat);
    oldBeatSection.appendChild(newBeatSection);

}


