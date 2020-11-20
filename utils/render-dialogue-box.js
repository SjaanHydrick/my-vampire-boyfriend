// pulls dialgoue information from passed object, creates 'p' element

import { getTextSpeed } from './manage-local-storage.js';
import { resetDialButton } from './render-dial-button.js';
import { resetNavButtons } from './render-nav-buttons.js';
import { wireButtons } from './wire-buttons.js';
// variable that notifies typerWriter() if user has pushed 'advance' button
let advance = false;
// takes in JSON returns dialogue box element
export function renderDialogueBox(object) {
    const div = document.createElement('div');

    const dialogueString = document.createElement('p');
    dialogueString.id = 'dialogue-box';

    // disables dial button while dialogue displays
    resetDialButton();
    // disables nav button while dialogue displays
    resetNavButtons();
    // rewires dial button to advance dialogue display
    wireAdvanceButton();

    div.appendChild(dialogueString);

    // counter for typeWriter()
    let i = 0;

    typeWriter(dialogueString, object, i);
    div.id = 'dialogue-div';

    return div;
}

// recursive function that creates typing effect in dialogue box
// soooo coooooool!!!
export function typeWriter(dialogueString, object, i) {
    // pulls text speed from local storage
    let speed = getTextSpeed();
    // while not all of passed text has been rendered & 
    // user hasn't pushed 'advanced' button
    if (i < object.dialogueBox.length && !advance) {
        // adds next letter to dialogue box
        dialogueString.textContent += object.dialogueBox.charAt(i);
        // iterates counter
        i++;
        // timeout function that creates delay between letters being added to textContent
        setTimeout(function() {
            // calls the function to iterate through passed string.
            typeWriter(dialogueString, object, i);
            // speed variable is user-defined speed of text rendering
            // measured in milli-seconds
        }, speed);
        // after string completely rendered or user has pushed 'advance' button
    } else {
        //  when dialogue is finished rendering wires appropriate buttons and renders responses
        wireButtons(object);
        // if user pushed 'advance' button, add all string to dialogue box
        if (advance) {
            dialogueString.textContent = object.dialogueBox;
        }
        // resets advance variable
        advance = false;

    }
}
// creates functionality for 'advance' button while dialogue renders
function wireAdvanceButton() {
    const dialButton = document.getElementById('dial-button');
    // if user pushs dialButton, sets 'advance' to true
    // ends recursive typeWriter function
    dialButton.onclick = function() {
        advance = true;
    };
    dialButton.textContent = 'NEXT';
}