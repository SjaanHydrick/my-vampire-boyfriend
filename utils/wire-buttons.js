import { renderNavButtons, resetNavButtons } from './render-nav-buttons.js';
import { renderDialButton, resetDialButton } from './render-dial-button.js';
import { renderResponses } from './render-responses.js';
import { buttonTutorial } from './button-tutorial.js';


export function wireButtons(object) {
    const beatSection = document.getElementById('beat-section');

    if (object.buttonChoice === 'dial') {
        renderDialButton(object);
        resetNavButtons();

    } else {
        const responseSection = renderResponses(object);
        beatSection.appendChild(responseSection);
        renderNavButtons(object);
        resetDialButton();

        if (object.tutorial) {
            buttonTutorial();
        }
    }
}