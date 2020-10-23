import { renderNavButtons, resetNavButtons } from './render-nav-buttons.js';
import { renderDialButton, resetDialButton } from './render-dial-button.js';
import { renderResponses } from './render-responses.js';
import { buttonTutorial } from './button-tutorial.js';

// adds functionality to appropriate navigation buttons
// beat JSON specifies buttonChoice: "nav" || "dial"

export function wireButtons(object) {
    const beatSection = document.getElementById('beat-section');
    if (object.buttonChoice === 'dial') {
        // wires dial button with functionality from JSON
        renderDialButton(object);

    } else {
        // creates response elements within response-div
        const responseSection = renderResponses(object);
        beatSection.appendChild(responseSection);
        // wires nav buttons with functionality from JSON
        renderNavButtons(object);
        // on first use of nav buttons, adds 'glow' class to buttons & responses to 
        // let user know the two are linked
        if (object.tutorial) {
            buttonTutorial();
        }
    }
}