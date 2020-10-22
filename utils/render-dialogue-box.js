// pulls dialgoue information from passed object, creates 'p' element

import { getTextSpeed } from "./manage-local-storage.js";
import { resetDialButton } from "./render-dial-button.js";
import { resetNavButtons } from "./render-nav-buttons.js";
import { wireButtons } from './wire-buttons.js';
// returns it

let advance = false;

export function renderDialogueBox(object) {
    const div = document.createElement('div');
    let i = 0;

    const dialogueString = document.createElement('p');
    dialogueString.id = 'dialogue-box';

    resetDialButton();
    resetNavButtons();
    wireAdvanceButton();

    div.appendChild(dialogueString);
    typeWriter(dialogueString, object, i);
    div.id = 'dialogue-div';

    return div;
}


export function typeWriter(dialogueString, object, i) {
    let speed = getTextSpeed();

    if (i < object.dialogueBox.length && !advance) {
        dialogueString.textContent += object.dialogueBox.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(dialogueString, object, i);
        }, speed);
    } else {
        wireButtons(object);
        advance = false;
        if (i < object.dialogueBox.length) {
            dialogueString.textContent = object.dialogueBox;
        }
    }
}

function wireAdvanceButton() {
    const dialButton = document.getElementById('dial-button');
    dialButton.onclick = function () {
        advance = true;
    };
    dialButton.textContent = 'NEXT';
}