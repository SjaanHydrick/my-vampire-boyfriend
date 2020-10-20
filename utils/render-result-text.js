import { getFromLocalStorage } from './manage-local-storage.js';


const storageKey = 'USERKEY';





export function renderResultText(resultText) {
    const player = getFromLocalStorage(storageKey);

    if (player.vampire === 'dead' && player.tofu === true) {

        resultText.textContent = `Your vampire BF dies of garlic.` ;

    }


}



export function renderDatesText(datesText) {
    const player = getFromLocalStorage(storageKey);

    if (player.chapters === 0) {

        datesText.textContent = ` You didn't make it through a single date with your vampire Boyfriend. You absolute Adonnis.` ;

    }


}





